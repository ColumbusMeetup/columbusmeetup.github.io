---
layout: page
title: About
permalink: /about/
---

Columbus, Ohio deserves a better tech and entrepreneurial community.  Join our meetups and help us bridge the gap between quarterly and annual events in Columbus.

Subscribe to the mailing list.  We'll let you know whenever there's an upcoming event to check out.

<h2 class="n-m-b">Our events</h2>

<ul class="group-list">
  {% assign groups = site.groups | split: ' ' %}
  {% for group in groups %}{% if site[group] %}
  <li>
    <h3>{{ site[group].title }}</h3>
    <p>{{ site[group].description }}</p>
  </li>
  {% endif %}{% endfor %}
  <li>
    <h3>More coming soon...</h3>
  </li>
</ul>
