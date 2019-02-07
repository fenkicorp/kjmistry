---
layout: default
title: Endodontic Radiographs
youtubeId: LiFmmmU_ZL8
description: Pre + post operative periapicals showing completed RCTs
permalink: /treatments/radiographs/
order: 1
---
## Radiographs
{% assign orderedTreatments = site.radiographs | sort:"order" %}
{% for t in orderedTreatments %}
<table>
<tbody>
  <tr>
        <td style="width:50%"><img src="{{t.image}}" /></td>
                <td style="width:50%"><img src="{{t.image2}}" /></td>
  </tr>
  <tr>
  <td colspan="2">{{t.description}}</td>
  </tr>
  </tbody>
  </table>
{% endfor %}
