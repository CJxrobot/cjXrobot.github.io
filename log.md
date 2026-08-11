---
layout: default
title: Log
---
<div class="container mx-auto px-8 pb-32 max-w-2xl">
    <h1 class="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-16 text-center">Log</h1>
    <div class="divide-y divide-zinc-200">
        {% for post in site.posts %}
        <a href="{{ post.url | relative_url }}" class="flex justify-between items-baseline py-5 group">
            <span class="text-sm font-light text-zinc-700 group-hover:text-zinc-900 transition">{{ post.title }}</span>
            <span class="text-[9px] uppercase tracking-[0.2em] text-zinc-400 whitespace-nowrap ml-6">{{ post.date | date: "%b %-d, %Y" }}</span>
        </a>
        {% else %}
        <p class="text-center text-sm text-zinc-400 font-light py-8">No entries yet — add one to <code>_posts/</code>.</p>
        {% endfor %}
    </div>
</div>
