"use client";
import { useEffect } from "react";

export default function Invite() {
  useEffect(() => {
    window.location.href =
      "https://discord.com/api/oauth2/authorize?client_id=961913060023488564&permissions=8&scope=bot";
  }, []);

  return null;
}
