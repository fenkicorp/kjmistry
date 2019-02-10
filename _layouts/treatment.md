---
layout: default
---

<h2>{{page.title}}</h2>
<p>
{% for tag in page.tags%}
 {% assign tagLookup = site.certificate-tags %}
   {% for tagLabel in tagLookup %}

     {% if tagLabel.tagId == tag %}
       <span class="badge badge-secondary ">
         {{tagLabel.name | capitalize }}
       </span>
     {% endif %}
   {% endfor %}
{% endfor %}
</p>

<p>
{{page.description}}
</p>

{{page.content}}
