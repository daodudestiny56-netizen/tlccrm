import type { Metadata } from "next";
import { DemoNote } from "@/components/DemoNote";
import { PageHero } from "@/components/PageHero";
import { ExecutiveDirectory } from "./ExecutiveDirectory";

export const metadata: Metadata = {
  title: "Executive council",
  description: "The students who lead the TLC campus fellowship at Obafemi Awolowo University this session.",
};

export default function ExecutivesPage() {
  return (
    <>
      <PageHero
        title={["Executive", "council"]}
        intro={
          <p>
            The students who lead the fellowship this session, from the president to the unit
            coordinators. Reach any of them directly about prayer, welfare or joining a unit.
          </p>
        }
        aside={
          <DemoNote>
            Demo profiles. Names, photographs and contact details are placeholders until the new
            council is announced.
          </DemoNote>
        }
      />
      <ExecutiveDirectory />
    </>
  );
}
