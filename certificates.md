---
layout: default
title: Certificates
permalink: certificates
icon: "fas fa-award"
---
## Certificates
<br />

{% assign categories = site.certificate-categories | sort:"order" %}
{% for t in categories %}
  <h4>{{t.name}}</h4>
  <hr />

  <table class="table table-striped">
  {% assign certs = site.certificates | where: "categoryId", 1 %}
  {% for c in certs %}

    <tr>
     <td>
     <a href="{{c.filePath}}" target="_blank" ><i class="fas fa-file-alt"></i>  {{c.name}}</a>
     </td>
    </tr>

  {% endfor %}
  </table>
{% endfor %}
