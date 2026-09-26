---
layout: default
title: Log
permalink: /log/
---
<div class="container mx-auto px-6 md:px-8 pb-32 max-w-2xl">
    <h1 class="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500 mb-16">
        <span class="text-accent">&gt;</span> Log
    </h1>
    <div class="divide-y-2 divide-zinc-200 border-t-2 border-b-2 border-zinc-900">
        {% for post in site.posts %}
        <a href="{{ post.url | relative_url }}" class="flex justify-between items-baseline py-5 group">
            <span class="text-sm font-light text-zinc-700 group-hover:text-accent transition">{{ post.title }}</span>
            <span class="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400 whitespace-nowrap ml-6">{{ post.date | date: "%b %-d, %Y" }}</span>
        </a>
        {% else %}
        <p class="text-center text-sm text-zinc-500 font-light py-8">No entries yet — add one to <code>_posts/</code>.</p>
        {% endfor %}
    </div>
</div>
