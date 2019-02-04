---
layout: default
title: Certificates
permalink: certificates
---
# Certificates

{% assign image_files = site.static_files%}
{% for myimage in image_files %}
{% if myimage.path contains '/certificates/' %}
* [{{myimage.basename}}]({{myimage.path}}){:target="_blank"}
{% endif %}
{% endfor %}
