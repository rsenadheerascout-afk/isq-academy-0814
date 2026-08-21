export interface WhyLearnItem {
  step: string;
  title: string;
  desc: string;
}

export const whyLearnContent = {
  label: "Our Belief",

  title: "Be human",
  highlightedTitle: "first.",

  description:
    "We are not raising screen-bound coders. We are raising thoughtful humans who use technology as leverage — for family, community, nature and wellbeing.",

  benefits: [
    {
      step: "STEP 1",
      title: "Technology",
      desc: "Master the tools",
    },
    {
      step: "STEP 2",
      title: "Efficiency",
      desc: "Get more done, faster",
    },
    {
      step: "STEP 3",
      title: "More Time",
      desc: "Free hours back",
    },
    {
      step: "STEP 4",
      title: "Better Life",
      desc: "Family · nature · self",
    },
  ] satisfies WhyLearnItem[],
};