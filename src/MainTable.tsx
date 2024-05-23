import React, { useState } from 'react';
import { Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { salaryData, JobData, YearlyData } from './data';

interface SalaryData {
    year: number;
    totalJobs: number;
    averageSalary: number;
}

const columns: ColumnsType<SalaryData> = [
    {
        title: 'Year',
        dataIndex: 'year',
        key: 'year',
        sorter: (a, b) => a.year - b.year,
    },
    {
        title: 'Number of Total Jobs',
        dataIndex: 'totalJobs',
        key: 'totalJobs',
        sorter: (a, b) => a.totalJobs - b.totalJobs,
    },
    {
        title: 'Average Salary (USD)',
        dataIndex: 'averageSalary',
        key: 'averageSalary',
        sorter: (a, b) => a.averageSalary - b.averageSalary,
    },
];

const jobColumns: ColumnsType<JobData> = [
    {
        title: 'Job Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Number of Jobs',
        dataIndex: 'count',
        key: 'count',
    },
];

const MainTable: React.FC = () => {
    const [selectedYearData, setSelectedYearData] = useState<YearlyData | null>(null);

    const handleRowClick = (record: SalaryData) => {
        const yearData = salaryData.find(data => data.year === record.year);
        setSelectedYearData(yearData || null);
    };

    return (
        <div>
            <Table
                columns={columns}
                dataSource={salaryData}
                rowKey="year"
                onRow={(record) => ({
                    onClick: () => handleRowClick(record),
                })}
            />
            {selectedYearData && (
                <div>
                    <Typography.Title level={4}>Job Titles in {selectedYearData.year}</Typography.Title>
                    <Table
                        columns={jobColumns}
                        dataSource={selectedYearData.jobs}
                        rowKey="title"
                        pagination={false}
                    />
                </div>
            )}
        </div>
    );
};

export default MainTable;
