export interface JobData {
    title: string;
    count: number;
}

export interface YearlyData {
    year: number;
    totalJobs: number;
    averageSalary: number;
    jobs: JobData[];
}

export const salaryData: YearlyData[] = [
    {
        year: 2020,
        totalJobs: 150,
        averageSalary: 90000,
        jobs: [
            { title: 'Machine Learning Engineer', count: 80 },
            { title: 'Data Scientist', count: 50 },
            { title: 'AI Specialist', count: 20 },
        ],
    },
    {
        year: 2021,
        totalJobs: 200,
        averageSalary: 95000,
        jobs: [
            { title: 'Machine Learning Engineer', count: 100 },
            { title: 'Data Scientist', count: 70 },
            { title: 'AI Specialist', count: 30 },
        ],
    },
    {
        year: 2022,
        totalJobs: 250,
        averageSalary: 100000,
        jobs: [
            { title: 'Machine Learning Engineer', count: 120 },
            { title: 'Data Scientist', count: 90 },
            { title: 'AI Specialist', count: 40 },
        ],
    },
    {
        year: 2023,
        totalJobs: 300,
        averageSalary: 105000,
        jobs: [
            { title: 'Machine Learning Engineer', count: 140 },
            { title: 'Data Scientist', count: 110 },
            { title: 'AI Specialist', count: 50 },
        ],
    },
    {
        year: 2024,
        totalJobs: 350,
        averageSalary: 110000,
        jobs: [
            { title: 'Machine Learning Engineer', count: 160 },
            { title: 'Data Scientist', count: 130 },
            { title: 'AI Specialist', count: 60 },
        ],
    },
];
