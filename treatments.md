---
layout: default
title: Treatments
youtubeId: K76L9TWdfh0
permalink: treatments
icon: "fas fa-tooth"
---
## Treatments


<table class="table table-striped">
<tbody>
{% assign orderedTreatments = site.treatments | sort:"order"%}
{% for t in orderedTreatments %}
  <tr>
    <td><a href="{{t.url}}">{{t.title}}</a></td>
    <td>{{t.description}}</td>
  </tr>
{% endfor %}
</tbody>
</table>
