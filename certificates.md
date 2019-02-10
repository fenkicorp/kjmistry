---
layout: default
title: Certificates
permalink: certificates
icon: "fas fa-award"
---
## Certificates

{% assign image_files = site.static_files%}

<table class="table table-striped">

{% for myimage in image_files %}
{% if myimage.path contains '/certificates/' %}
  <tr>
   <td>
   <a href="{{myimage.path}}" target="_blank" ><i class="fas fa-file-alt"></i>  {{myimage.basename}}</a>
   </td>
  </tr>

{% endif %}
{% endfor %}

</table>
