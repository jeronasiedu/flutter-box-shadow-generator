interface FlutterShadow {
  color: string;
  blurRadius: number;
  spreadRadius: number;
  offset: {
    xOffset: number;
    yOffset: number;
  };
}

interface ParsedColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

/**
 * Parses various CSS color formats and converts them to Flutter Color.fromRGBO format
 */
const parseColor = (colorString: string): string => {
  const trimmed = colorString.trim();

  // Handle rgba/rgb functions
  const rgbaMatch = trimmed.match(/rgba?\(([^)]+)\)/);
  if (rgbaMatch) {
    const values = rgbaMatch[1].split(",").map((v) => parseFloat(v.trim()));
    const r = Math.round(values[0] || 0);
    const g = Math.round(values[1] || 0);
    const b = Math.round(values[2] || 0);
    const a = values[3] !== undefined ? values[3] : 1;
    return `Color.fromRGBO(${r}, ${g}, ${b}, ${a})`;
  }

  // Handle hex colors
  const hexMatch = trimmed.match(/^#([0-9a-fA-F]{3,8})$/);
  if (hexMatch) {
    let hex = hexMatch[1];

    // Convert 3-digit hex to 6-digit
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((char) => char + char)
        .join("");
    }

    // Handle 6-digit hex
    if (hex.length === 6) {
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      return `Color.fromRGBO(${r}, ${g}, ${b}, 1.0)`;
    }

    // Handle 8-digit hex (with alpha)
    if (hex.length === 8) {
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      const a = parseInt(hex.substr(6, 2), 16) / 255;
      return `Color.fromRGBO(${r}, ${g}, ${b}, ${a.toFixed(3)})`;
    }
  }

  // Handle named colors (basic ones)
  const namedColors: Record<string, string> = {
    black: "Color.fromRGBO(0, 0, 0, 1.0)",
    white: "Color.fromRGBO(255, 255, 255, 1.0)",
    red: "Color.fromRGBO(255, 0, 0, 1.0)",
    green: "Color.fromRGBO(0, 128, 0, 1.0)",
    blue: "Color.fromRGBO(0, 0, 255, 1.0)",
    transparent: "Color.fromRGBO(0, 0, 0, 0.0)",
  };

  const lowerColor = trimmed.toLowerCase();
  if (namedColors[lowerColor]) {
    return namedColors[lowerColor];
  }

  // Fallback to black if color cannot be parsed
  console.warn(`Could not parse color: ${colorString}, defaulting to black`);
  return "Color.fromRGBO(0, 0, 0, 1.0)";
};

/**
 * Extracts numeric value from CSS unit string (px, em, rem, etc.)
 */
const parseNumericValue = (value: string | undefined): number => {
  if (!value || value.trim() === "") return 0;
  const numericValue = parseFloat(value.replace(/[a-zA-Z%]+/g, ""));
  return isNaN(numericValue) ? 0 : numericValue;
};

/**
 * Splits shadow string into individual shadow chunks
 */
const sliceIntoChunks = (splitShadow: string[]): string[][] => {
  const results: string[][] = [];

  while (splitShadow.length > 0) {
    // Look for the next color token to determine where the next shadow starts
    let chunkSize = 4; // Default: x, y, blur, color (no spread)

    // Check if we have a spread radius (5th parameter that's a length unit)
    if (
      splitShadow[4] &&
      /^-?\d*\.?\d+(px|em|rem|%|pt|pc|in|cm|mm|ex|ch|vw|vh|vmin|vmax)$/.test(
        splitShadow[4],
      )
    ) {
      chunkSize = 5; // x, y, blur, spread, color
    }

    // Handle inset keyword
    if (splitShadow[0] === "inset") {
      chunkSize += 1;
    }

    const chunk = splitShadow.splice(0, chunkSize);
    results.push(chunk);
  }

  return results;
};

/**
 * Processes shadow chunks and converts them to Flutter shadow objects
 */
const massageShadow = (separatedShadow: string[][]): FlutterShadow[] => {
  const results: FlutterShadow[] = [];

  separatedShadow.forEach((item) => {
    let colorIndex = 0;
    let offsetStartIndex = 0;

    // Handle inset shadows (Flutter doesn't support inset, so we'll skip for now)
    if (item[0] === "inset") {
      console.warn("Inset shadows are not supported in Flutter BoxShadow");
      offsetStartIndex = 1;
    }

    // Find color in the chunk - it can be at the beginning or end
    let color = "";
    const colorPatterns = [
      /^rgba?\(/,
      /^#[0-9a-fA-F]/,
      /^(black|white|red|green|blue|transparent|gray|grey)$/i,
    ];

    // Check if first item (after potential inset) is a color
    const firstItem = item[offsetStartIndex];
    if (colorPatterns.some((pattern) => pattern.test(firstItem))) {
      color = parseColor(firstItem);
      offsetStartIndex += 1;
    } else {
      // Color is likely at the end
      const lastItem = item[item.length - 1];
      if (colorPatterns.some((pattern) => pattern.test(lastItem))) {
        color = parseColor(lastItem);
        item.pop(); // Remove color from the end
      } else {
        // No color found, default to black
        color = "Color.fromRGBO(0, 0, 0, 1.0)";
      }
    }

    // Parse offset and blur values
    const xOffset = parseNumericValue(item[offsetStartIndex]);
    const yOffset = parseNumericValue(item[offsetStartIndex + 1]);
    const blurRadius = parseNumericValue(item[offsetStartIndex + 2]);
    const spreadRadius = parseNumericValue(item[offsetStartIndex + 3]);

    const shadow: FlutterShadow = {
      color,
      blurRadius: Math.max(0, blurRadius), // Ensure non-negative
      spreadRadius,
      offset: {
        xOffset,
        yOffset,
      },
    };

    results.push(shadow);
  });

  return results;
};

/**
 * Generates Flutter BoxShadow code from shadow objects
 */
const beautifyShadow = (results: FlutterShadow[]): string => {
  if (results.length === 0) {
    return "boxShadow: []";
  }

  const shadowStrings = results.map((item) => {
    const { xOffset, yOffset } = item.offset;
    return `    BoxShadow(
      color: ${item.color},
      blurRadius: ${item.blurRadius},
      spreadRadius: ${item.spreadRadius},
      offset: Offset(${xOffset}, ${yOffset}),
    )`;
  });

  return `boxShadow: [
${shadowStrings.join(",\n")}
  ]`;
};

/**
 * Converts CSS box-shadow string to Flutter BoxShadow format
 *
 * @param shadow - CSS box-shadow string (e.g., "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px")
 * @returns Flutter BoxShadow code string
 *
 * @example
 * ```typescript
 * const flutterShadow = convertShadow("rgba(99, 99, 99, 0.2) 0px 2px 8px 0px");
 * console.log(flutterShadow);
 * // Output: boxShadow: [
 * //   BoxShadow(
 * //     color: Color.fromRGBO(99, 99, 99, 0.2),
 * //     blurRadius: 8,
 * //     spreadRadius: 0,
 * //     offset: Offset(0, 2),
 * //   )
 * // ]
 * ```
 */
export const convertShadow = (shadow: string): string => {
  if (
    !shadow ||
    shadow.trim() === "" ||
    shadow.trim().toLowerCase() === "none"
  ) {
    return "boxShadow: []";
  }

  try {
    // Split shadow string by commas, but not those inside parentheses (for rgba/rgb)
    const shadowParts = shadow.split(/,(?![^()]*\))/);
    const allShadows: string[] = [];

    // Process each shadow part
    shadowParts.forEach((part) => {
      // Split by spaces, but keep function calls intact
      const tokens = part.trim().split(/\s+(?![^()]*\))/);
      allShadows.push(...tokens);
    });

    const chunkedShadows = sliceIntoChunks(allShadows);
    const results = massageShadow(chunkedShadows);
    return beautifyShadow(results);
  } catch (error) {
    console.error("Error converting shadow:", error);
    return "boxShadow: []";
  }
};

export { type FlutterShadow, parseColor, parseNumericValue };
