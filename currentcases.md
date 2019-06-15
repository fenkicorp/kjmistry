---
layout: default
title: Current cases
permalink: currentcases
icon: "fas fa-tooth"
---
## Current Cases


<table class="table table-striped">
<tbody>
{% assign orderedCurrentcases = site.currentcases | sort:"order"%}
{% for t in orderedCurrentcases %}
  <tr>
    <td><a href="{{t.url}}">{{t.title}}</a></td>
    <td>{{t.description}}</td>
  </tr>
{% endfor %}
</tbody>
</table>
