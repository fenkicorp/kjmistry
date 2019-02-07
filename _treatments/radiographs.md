---
layout: default
title: Radiographs
youtubeId: LiFmmmU_ZL8
description: RCT's
permalink: /treatments/radiographs/
order: 1
---
## Radiographs
<table>
<tbody>
{% assign orderedTreatments = site.radiographs | sort:"order" %}
{% for t in orderedTreatments %}
  <tr>
    <td>{{t.description}}</td>
        <td style="width:25%"><img src="{{t.image}}" /></td>
                <td style="width:25%"><img src="{{t.image2}}" /></td>
  </tr>
{% endfor %}
</tbody>
</table>
