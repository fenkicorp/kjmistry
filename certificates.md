---
layout: default
title: Certificates
permalink: certificates
icon: "fas fa-award"
---
## Certificates
<br />

<div class="row">



{% assign categories = site.certificate-categories | sort:"order" %}
{% for t in categories %}

<div class="col-md-6">
  <h4>{{t.name}}</h4>
  <hr />

  <table class="table table-striped">
  {% assign certs = site.certificates | sort:"order" %}
  {% for c in certs %}

    {% if c.categoryId == t.categoryId %}
    <tr>
     <td>
     <a href="{{c.filePath}}" target="_blank" ><i class="fas fa-file-alt"></i>&nbsp;&nbsp;{{c.name}}</a>
     </td>
    </tr>
    {% endif %}
  {% endfor %}
  </table>
  </div>
{% endfor %}

</div>
