import { createFileRoute } from "@tanstack/react-router";
import { Presentation } from "@/components/deck/Presentation";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Presentation />;
}
