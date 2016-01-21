---
layout: page
title: About
permalink: /about/
---

{{ site.description }}

Interested in attending our meetups?  Sign up for the mailing list and we'll keep you in the loop.

Interested in joining our cause?  <a href="mailto:{{ site.email }}">Contact us</a>.

<h2 class="n-m-b">Our meetups:</h2>

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
