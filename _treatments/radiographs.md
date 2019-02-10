---
layout: treatment
title: Endodontic Radiographs
youtubeId: LiFmmmU_ZL8
description: Pre + post operative periapicals showing completed RCTs
permalink: /treatments/radiographs/
order: 1
tags: [4,21]
---

{% assign orderedTreatments = site.radiographs | sort:"order" %}
{% for t in orderedTreatments %}

<div class="card mt-4">
  <div class="card-body">
    <div class="card-title h6">
     {{t.description}}
    </div>

    <div class="row">
      <div class="col-md-6 text-center  animated fadeIn">
        <img src="{{t.image}}" class="img-fluid" />
      </div>
      <div class="col-md-6 text-center  animated fadeIn">
        <img src="{{t.image2}}" class="img-fluid" />
      </div>
    </div>
  </div>
</div>

{% endfor %}
