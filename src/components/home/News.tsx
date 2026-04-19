'use client';

import { motion } from 'framer-motion';
import { useMessages } from '@/lib/i18n/useMessages';

export interface NewsItem {
    date: string;
    content: string;
    link?: string;
    link_label?: string;
    links?: Array<{
        label: string;
        href: string;
    }>;
}

interface NewsProps {
    items: NewsItem[];
    title?: string;
}

export default function News({ items, title }: NewsProps) {
    const messages = useMessages();
    const resolvedTitle = title || messages.home.news;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">{resolvedTitle}</h2>
            <div className="space-y-3">
                {items.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <span className="text-xs text-neutral-500 mt-1 w-16 flex-shrink-0">{item.date}</span>
                        <div className="text-sm text-neutral-700">
                            <p>{item.content}</p>
                            {item.links && item.links.length > 0 && (
                                <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                                    {item.links.map((entry, linkIndex) => (
                                        <a
                                            key={`${entry.href}-${linkIndex}`}
                                            href={entry.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent hover:underline"
                                        >
                                            {entry.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                            {!item.links?.length && item.link && (
                                <p className="mt-1">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-accent hover:underline"
                                    >
                                        {item.link_label || item.link}
                                    </a>
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
