---
layout: default
title: Clinics
youtubeId:
permalink: clinics
icon: "far fa-hospital"
---

## Clinics

<div class="row">
  {% assign orderedClinics = site.clinics | sort:"order" %}
  {% for t in orderedClinics %}
  <div class="col-md-6 mb-3">
    <div class="card shadow-sm mb-1">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-4 col-md-2">
              <img src="{{t.logoImage}}" class="img-fluid" alt="{{t.title}}">
            </div>
            <div class="col-8 col-md-10">
              <div class="card-title">
                <a href="{{t.clinicUrl}}" target="blank">{{t.title}} - <i class="fas fa-external-link-alt"></i></a>
              </div>
              <h6 class="card-subtitle mb-2 text-muted">{{t.fromDate}} - {{t.toDate}}</h6>
              <div class="card-text">{{t.description}}</div>
            </div>
          </div>
        </div>


    </div>
  </div>
  {% endfor %}

</div>
