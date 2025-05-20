// src/app/blog/frontend/[slug].jsx
'use client';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
const blogContent = {
  'github-actions-ci-cd': {
    title: 'CI/CD with GitHub Actions',
    description: 'Automate your builds and deployments using GitHub Actions.',
    content: `GitHub Actions allows you to define workflows that automate your build, test, and deployment pipelines directly from your GitHub repository. With YAML-based configurations, it's easy to integrate CI/CD into your development lifecycle.`,
    tags: ['CI/CD', 'GitHub Actions', 'DevOps']
  },
  'docker-basics': {
    title: 'Docker for Beginners',
    description: 'Learn how to containerize your applications using Docker.',
    content: `Docker packages your application and its dependencies into a container, ensuring it runs consistently across environments. This guide covers Docker installation, Dockerfile creation, and running containers effectively.`,
    tags: ['Docker', 'Containers', 'DevOps']
  },
  'kubernetes-intro': {
    title: 'Kubernetes Deployment 101',
    description: 'Deploy and manage applications with Kubernetes.',
    content: `Kubernetes is a powerful container orchestration platform that automates deployment, scaling, and management. Learn how to deploy your first app using Pods, Services, and Deployments.`,
    tags: ['Kubernetes', 'Containers', 'Deployment']
  },
  'terraform-iac': {
    title: 'Infrastructure as Code with Terraform',
    description: 'Manage cloud infrastructure with Terraform scripts.',
    content: `Terraform lets you define and provision infrastructure using code. This enables repeatable, version-controlled infrastructure deployments across cloud providers like AWS, Azure, and GCP.`,
    tags: ['Terraform', 'IaC', 'Cloud']
  },
  'monitoring-prometheus-grafana': {
    title: 'Monitoring with Prometheus & Grafana',
    description: 'Track your systems and visualize metrics effectively.',
    content: `Prometheus collects metrics and Grafana visualizes them through customizable dashboards. Together, they help monitor infrastructure, spot issues early, and improve system reliability.`,
    tags: ['Monitoring', 'Prometheus', 'Grafana']
  }
};

export function generateMetadata({ params }) {
  const blog = blogContent[params.slug];
  if (!blog) return { title: 'Blog Not Found' };

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://kumarwebworks.com/blog/frontend/${params.slug}`,
      type: 'article',
    },
  };
}

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogContent[slug];
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('blog-dark-mode');
    if (saved === 'true') setIsDark(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('blog-dark-mode', isDark);
  }, [isDark]);

  if (!blog) return <div className="text-center mt-10 text-gray-500">Blog not found.</div>;

  return (
    <PageIntro eyebrow={blog.title} title={blog.description} >
          <p>
            {blog.content} 
          </p>
        </PageIntro>
    // <div className={`transition-colors duration-300 px-6 py-10 max-w-3xl mx-auto ${isDark ? 'dark' : ''}`}>
    //   <div className="flex justify-between items-center mb-6">
    //     <h1 className="text-3xl font-bold">{blog.title}</h1>
    //     <button
    //       onClick={() => setIsDark(!isDark)}
    //       className="text-sm px-3 py-1 border rounded dark:bg-white dark:text-black"
    //     >
    //       {isDark ? '☀ Light Mode' : '🌙 Dark Mode'}
    //     </button>
    //   </div>
    //   <div className="prose dark:prose-invert dark:bg-gray-900 dark:text-white p-6 rounded-lg">
    //     <p className="text-lg leading-7 whitespace-pre-line">{blog.content}</p>
    //   </div>
    // </div>
  );
}
