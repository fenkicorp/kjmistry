---
layout: default
title: Certificates
permalink: certificates
icon: "fas fa-award"
---
## Certificates
<hr >
<div class="row">

{% assign categories = site.certificate-categories | sort:"order" %}
{% for t in categories %}

<div class="col-md-6">
  <h4>{{t.name}}</h4>


  <ul class="list-group list-group-flush">
  {% assign certs = site.certificates | sort:"order" %}
  {% for c in certs %}

    {% if c.categoryId == t.categoryId %}
    <li class="list-group-item">

     <div class="row mb-2">
     <div class="col-12">
     {% for tag in c.tags%}
      {% assign tagLookup = site.certificate-tags %}
        {% for tagLabel in tagLookup %}

          {% if tagLabel.tagId == tag %}
            <span class="badge badge-dark float-right ml-1 mb-1">
              {% if tagLabel.uppercase == 'y' %}
                {{tagLabel.name | upcase }}
              {% else  %}
                {{tagLabel.name | capitalize }}
              {% endif  %}
            </span>
          {% endif %}
        {% endfor %}
     {% endfor %}
     </div>
     </div>
     <div class="row">
     <div class="col-12">
     <a class="" href="{{c.filePath}}" target="_blank" ><i class="fas fa-file-alt"></i>&nbsp;&nbsp;{{c.name}}</a>
     </div>
     </div>
    </li>
    {% endif %}
  {% endfor %}
  </ul>
  </div>
{% endfor %}

</div>
