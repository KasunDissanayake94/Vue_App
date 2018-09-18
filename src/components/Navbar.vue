<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Vue App</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link tag="li" to="/">
          <a class="nav-link">Home <span class="sr-only">(current)</span></a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link tag="li" to="/artist">
            <a class="nav-link">Artist</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link tag="li" to="/album">
          <a class="nav-link">Album</a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script></script>

<style></style>
