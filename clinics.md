---
layout: default
title: Clinics
youtubeId: K76L9TWdfh0
permalink: clinics
---
## Treatments


<table>
<tbody>
{% for t in site.treatments %}
  <tr>
    <td><a href="{{t.url}}">{{t.title}}</a></td>
    <td>{{t.description}}</td>
  </tr>
{% endfor %}
</tbody>
</table>
