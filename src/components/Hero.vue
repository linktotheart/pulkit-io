<template>
  <div class="hero wrapper">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="inner">
            <h1
              class="hero-title"
              v-html="
                $static.prismicio.allHomepages.edges[0].node.hero_title[0].text
              "
            />
            <p
              class="lead"
              v-html="
                $static.prismicio.allHomepages.edges[0].node.hero_content[0]
                  .text
              "
            />
            <g-link
              v-for="buttons in $static.prismicio.allHomepages.edges[0].node
                .buttons"
              :key="buttons.id"
              :to="{buttons.button_link}"
              class="button"
            >
              Say Hello!
            </g-link>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="d-flex hero-img">
            <g-image src="~/assets/img/hero-img.png" class="fluid" />
          </div>
        </div>
      </div>
      <!-- ./ row -->
    </div>
  </div>
</template>
<static-query>
query{
	prismicio{
    allHomepages{
      edges{
        node{
            hero_title
            hero_image
            hero_content
            buttons{
            button_text
            button_link
          }
        }
      }
    }
  }
}
</static-query>
<script>
export default {
  name: "Header",
};
</script>
<style lang="scss" scoped>
.hero-img {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    transform-origin: center;
    background: #fff3;
    border-radius: 50%;
    z-index: -1;
    perspective: 1000px;
    transform: scale3d(1.15, 1.125, 1.125);
  }
}
</style>
