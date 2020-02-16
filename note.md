---
layout: default
title: Notes
permalink: notes
icon: "fas fa-calendar-alt"
---
<div ng-app="plunker" ng-cloak ng-controller="MainCtrl">

    <div class="row mb-3 mt-3">
      <div class="col-12">
        <button class="btn btn-dark" ng-click="addNote()">Add Note</button>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-12">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Treatment</label>
            <input
              ng-model="selectedNote.title"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Notes</label>
            <textarea ng-model="selectedNote.body" class="form-control" rows="5" >
            </textarea>
          </div>
          <button type="submit" ng-click="saveNote()" class="btn btn-dark">
            Save Note
          </button>
        </form>
      </div>
    </div>

    <h4>Notes</h4>
    <div class="row">
      <div class="col-12 col-sm-4 mb-4" ng-repeat="n in notes | orderBy: 'order'">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              <div class="row mb-2">
                <div class="col-8">
                  [[n.title]]
                </div>
                <div class="col-12 col-md-4 text-right">
                  <button class="btn btn-secondary btn-sm" ng-click="move(n, -1)" ng-disabled="n.order===0">
                    <i class="fas fa-chevron-circle-left"></i>
                  </button>
                  <button class="btn btn-secondary btn-sm" ng-click="move(n, 1)" ng-disabled="n.order===(notes.length-1)">
                    <i class="fas fa-chevron-circle-right"></i>
                  </button>
                </div>
              </div>
            </h5>
            <a href="#" class="btn btn-dark" ng-click="editNote(n)">
              <i class="fas fa-pencil-alt"></i>
            </a>
            <a href="#" class="btn btn-danger" ng-click="deleteNote(n)">
              <i class="fas fa-trash"></i>
            </a>
            <a href="#" class="btn btn-warning" ng-click="copyNote(n)">
              <i class="far fa-copy fa-inverse"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
