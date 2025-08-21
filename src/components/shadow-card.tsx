"use client";
import { Card } from "@/components/ui/card";
import { Shadow } from "@/lib/shadows";
import { Button } from "@/components/ui/button";
import { Check, CopyIcon } from "lucide-react";
import { useState } from "react";
import { convertShadow } from "@/lib/convert-css-shadow";
import { toast } from "sonner";

type Props = {
  shadow: Shadow;
};
const ShadowCard = ({ shadow }: Props) => {
  const [copied, setCopied] = useState(false);

  async function copyToClipboard() {
    const flutterShadow = convertShadow(shadow.shadow);
    await navigator.clipboard.writeText(flutterShadow);
    setCopied(true);
    toast.success("Copied to clipboard!", {
      id: "flutter-shadow-copied",
    });
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <Card
      className={
        "h-48 group hover:scale-105 transition-transform duration-300 relative overflow-hidden px-8 flex flex-col gap-4 items-center" +
        " justify-center"
      }
      style={{
        boxShadow: shadow.shadow,
      }}
    >
      <Button onClick={copyToClipboard} className={"w-24"}>
        {copied ? (
          <>
            <Check />
            Copied
          </>
        ) : (
          <>
            <CopyIcon />
            Copy
          </>
        )}
      </Button>
      {shadow.credit && (
        <span className={"text-xs text-muted-foreground"}>{shadow.credit}</span>
      )}
    </Card>
  );
};

export default ShadowCard;
