import {
  ArrowDown,
  Copy,
  GithubIcon,
  Palette,
  Sparkles,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ShadowLibrary from "@/components/shadow-library";
import Link from "next/link";
import { shadows } from "@/lib/shadows";
import { SplitText } from "@/components/ui/split-text";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen w-full bg-white relative py-16">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <section className="relative flex items-center justify-center">
          <div className="container mx-auto px-4 ">
            <div className="max-w-4xl mx-auto flex flex-col gap-4 md:gap-6 items-center text-center">
              <Badge
                variant="outline"
                className="text-xs px-4 py-2 shadow-md font-mono bg-white"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Free Flutter Tool
              </Badge>
              {/* Main Heading */}
              <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-slate-900 to-slate-700  text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight">
                Beautiful Box Shadows
                <span className="block text-transparent bg-gradient-to-b bg-clip-text from-slate-900 to-slate-600 ">
                  Made Simple.
                </span>
              </h1>
              <SplitText
                text="Generate stunning Flutter box shadows with one click. No more guessing values or tweaking parameters."
                className="text-md sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
                delay={100}
                duration={0.6}
                ease="elastic.out(0.1, 0.5)"
                splitType="words"
                from={{ opacity: 0, y: 50, filter: "blur(10px)", rotate: 20 }}
                to={{ opacity: 1, y: 0, filter: "blur(0px)", rotate: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                  <Zap className="w-4 h-4 text-orange-500" />
                  <span className=" text-sm text-foreground">Instant Copy</span>
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                  <Palette className="w-4 h-4 text-red-500" />
                  <span className=" text-sm text-foreground">
                    {shadows.length - 1}+ Styles
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                  <Copy className="w-4 h-4 text-green-500" />
                  <span className=" text-sm text-foreground">Ready to Use</span>
                </div>
              </div>
              {/* CTA Button */}
              <div className="pt-8 flex-col gap-y-6 sm:flex-row flex justify-center gap-4">
                <Button size="lg" variant={"outline"} asChild>
                  <Link
                    target={"_blank"}
                    href={
                      "https://github.com/jeronasiedu/flutter-box-shadow-generator"
                    }
                  >
                    Contribute Here
                    <GithubIcon />
                  </Link>
                </Button>
                <Button size="lg" asChild>
                  <Link href={"#shadow-library"}>
                    Browse Shadows
                    <ArrowDown />
                  </Link>
                </Button>
              </div>
              {/* Preview Cards */}
              <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <div
                    className="w-16 h-16 bg-white rounded-lg mx-auto border border-border"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px 0px",
                    }}
                  />
                  <h3 className="font-sans font-semibold text-foreground">
                    Subtle
                  </h3>
                  <p className=" text-sm text-muted-foreground">
                    Perfect for cards and buttons
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <div
                    className="w-16 h-16 bg-white rounded-lg mx-auto border border-border"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
                    }}
                  />
                  <h3 className="font-sans font-semibold text-foreground">
                    Deep
                  </h3>
                  <p className=" text-sm text-muted-foreground">
                    Great for modals and overlays
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <div
                    className="w-16 h-16 bg-white rounded-lg mx-auto border border-border"
                    style={{
                      boxShadow: "rgba(16, 185, 129, 0.4) 0px 0px 20px 0px",
                    }}
                  />
                  <h3 className="font-sans font-semibold text-foreground">
                    Glow
                  </h3>
                  <p className=" text-sm text-muted-foreground">
                    Add vibrant accent effects
                  </p>
                </div>
              </div>
            </div>
            {/*Shadow Library*/}
            <ShadowLibrary />
          </div>
        </section>
      </div>
    </div>
  );
}
