---
layout: treatment
title: Endodontic Radiographs
description: "A range of pre & post-operative periapicals showing completed RCTs. Reflections have been included where things have not been ideal."
permalink: /treatments/radiographs/
order: 1
tags: [4, 21]
titletag: DFT + Uni
---

{% assign orderedTreatments = site.data.radiographs | sort:"order" %}
{% for t in orderedTreatments %}
<div class="card mt-4">
  <div class="card-body">
    <div class="card-title h6">
     {{ t.description }}
    </div>
    <div class="row">
      <div class="col-md-6 text-center  animated fadeIn">
        <img src="{{t.image}}" class="img-fluid" />
      </div>
      <div class="col-md-6 text-center  animated fadeIn">
        <img src="{{t.image2}}" class="img-fluid" />
      </div>
    </div>
    <div class="mt-3">
       {{ t.text }}
    </div>
  </div>
</div>
{% endfor %}
