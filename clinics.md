---
layout: default
title: Clinics
youtubeId:
permalink: clinics
icon: "far fa-hospital"
---
## Clinics

A list of clinics I have worked in

<table>
<tbody>
{% for t in site.clinics %}
  <tr>
    <td><a href="{{t.clinicUrl}}">{{t.title}}</a></td>
    <td>{{t.description}}</td>
  </tr>
{% endfor %}
</tbody>
</table>
