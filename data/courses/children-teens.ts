import { Course } from "../course-types";

export const childrenTeensCourses: Course[] = [
    {
        slug: "life-skills",
        title: "Life Skills for Future Leaders",
        description:
            "Develop confidence, communication, teamwork, problem-solving, digital responsibility, and leadership skills for school and future life.",
        image: "/courses/life-skills.jpg",
        price: "Contact us",
        duration: "8 weeks",
        nextStartDate: "2026-10-01",
        category: "Children & Teens",
        commitment: "2–4 hours per week",
        studyMode: "Tutor guided / practical",

        lead: {
            name: "Course Instructor",
            role: "Youth Development & Leadership Specialist",
            bio:
                "A practical learning experience designed to help young learners develop confidence, communication, teamwork, decision-making, and responsible digital habits.",
            image: "/instructors/life-skills.jpg",
        },

        sections: [
            {
                id: "description",
                title: "Description",
                content: [
                    "Young people need more than academic knowledge to succeed in a rapidly changing world.",
                    "This course develops practical life and leadership skills through activities, discussions, teamwork, presentations, and real-world scenarios.",
                ],
            },
            {
                id: "modules",
                title: "Modules and activities",
                content: [
                    "Module 1: Self-awareness and confidence",
                    "Module 2: Communication and active listening",
                    "Module 3: Teamwork and collaboration",
                    "Module 4: Problem solving and decision making",
                    "Module 5: Digital responsibility and online safety",
                    "Module 6: Leadership and future readiness",
                ],
            },
            {
                id: "requirements",
                title: "Requirements",
                content: [
                    "Suitable for school-age learners.",
                    "No previous technical knowledge is required.",
                    "Learners should be willing to participate in practical activities and group discussions.",
                ],
            },
        ],

        testimonials: [
            {
                id: "life-skills-1",
                name: "Sarah Perera",
                role: "Parent of a Student",
                quote:
                    "The activities helped me become more confident when communicating with others and working as part of a team.",
                image: "/testimonials/sarah-perera.jpg",
            },
            {
                id: "life-skills-2",
                name: "Daniel Fernando",
                role: "Parent",
                quote:
                    "I noticed a real improvement in my child's confidence, communication, and willingness to take responsibility.",
                image: "/testimonials/daniel-fernando.jpg",
            },
            {
                id: "life-skills-3",
                name: "Nadeesha Silva",
                role: "School Student",
                quote:
                    "The practical activities made learning about leadership and problem solving much easier and more enjoyable.",
                image: "/testimonials/nadeesha-silva.jpg",
            },
        ],

        relatedCourses: [
            {
                slug: "",
                title: "O/L ICT",
                image: "/courses/ol-ict.jpg",
            },
            {
                slug: "",
                title: "AI for Everyday Life",
                image: "/courses/ai-everyday.jpg",
            },
        ],
    },
];
