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
{% assign orderedClinics = site.clinics | sort:"order" %}
{% for t in orderedClinics %}
  <tr>
    <td><a href="{{t.clinicUrl}}">{{t.title}}</a></td>
    <td>{{t.description}}</td>
  </tr>
{% endfor %}
</tbody>
</table>
