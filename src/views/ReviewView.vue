<script setup lang="ts">
import Banner from '@/components/Banner.vue';
import Profile from '@/components/Profile.vue';
import ProfileTagList from '@/components/ProfileTagList.vue';
import ProfileTag from '@/components/ProfileTag.vue';
import NavigationBar from '@/components/NavigationBar.vue';
import NavigationBarButton from '@/components/NavigationBarButton.vue';
import { MaterialSymbol } from '@dbetka/vue-material-symbols';
</script>

<template>
      <div>
        <main style="display:flex;flex-direction: column">
          <Banner src="https://derpicdn.net/img/2024/10/13/3462871/large.png">влад<br/>кот</Banner>
          <Profile>
            <ProfileTagList>
              <ProfileTag icon="🦄" text="mlp"/>
              <ProfileTag icon="⛩" text="touhou"/>
              <ProfileTag icon="🐺" text="furry"/>
            </ProfileTagList>
            <p>
              але всем здравствуйте всем привет
            </p>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fneko-arc-gifs-v0-mf2oclqamjo91.gif%3Fwidth%3D512%26auto%3Dwebp%26s%3D0f4a4660bc6719c432187cafd5b1341859f0a0f8&f=1&nofb=1&ipt=96d9ca693606b1049364e320abc4afaae096776a161d45e36cb4919baff85084&ipo=images" width=119/>
            <p>
              ⢀⣤⣄⣀⠀⠀⠀⠀⠀⡞⢏⡤⣤⠤⣀⣠⣤⡀⠀⠀
              ⠀⠀⠀⢸⢀⣻⠙⠯⣶⠤⠒⠚⢧⣮⣾⣛⣟⠋⠹⣅⡇⠀⠀
              ⠀⠀⠀⠈⢈⡣⠀⠀⢈⡗⠀⠀⠀⠙⠛⠢⣄⠉⠳⡏⠇⠀⠀
              ⠀⠀⠀⢸⠈⢳⣄⠔⠋⠀⠀⠸⠀⠀⠘⡆⠈⠱⣄⡹⡏⠀⠀
              ⠀⠀⠀⡼⠗⢻⡏⢠⠆⠀⢀⡆⠀⠀⠀⢸⡀⠀⠘⡏⢿⠀⠀
              ⠀⠀⡸⠁⠀⣿⠷⢻⣀⣠⡯⢤⡀⢠⡇⣸⣳⣀⡗⠇⢏⡆⠀
              ⠀⢰⠃⠀⢸⠇⢀⡏⢁⠃⢡⠀⠙⣿⢿⠉⡇⠀⢹⡄⢸⢸⡀
              ⠀⠧⢾⠀⠸⡄⠀⣳⣄⣇⡞⢀⡴⠛⢾⣴⣂⡠⡾⠀⢰⡶⡇
              ⠀⠀⠸⣠⣞⢧⢀⡷⣄⠈⠉⠣⠤⠞⠦⠟⢀⡼⣷⡀⢸⠁⠀
              ⠀⠀⠀⠀⠘⠛⠿⠧⡼⣯⡳⣦⡤⣴⣖⣺⡿⢶⠃⠈⠋⠀⠀
              ⢠⠞⠑⡆⠀⠀⠀⢀⠼⠉⢃⠀⠀⠀⠘⡟⡄⠀⠀⠀⠀⠀⠀
              ⠸⠀⢰⠁⠀⠀⢠⠋⠀⠀⡞⠀⠀⠀⠀⢹⠙⣄⠀⠀⠀⠀⠀
              ⢸⡀⠸⣄⢀⡤⠿⢦⡀⡼⠁⠀⠀⠀⠀⠸⣤⠟⠒⠢⡄⠀⠀
              ⠀⠙⢆⣀⡟⠀⠀⠈⢻⡽⠄⣀⣀⣀⡠⠤⢣⠀⠀⠀⡷⠀⠀
              ⠀⠀⠀⠀⢣⣀⣀⣀⣼⠀⠀⠀⠀⠀⠀⠀⠈⡗⠐⠊⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⠁⡶⠒⢱⠖⢺⡋⠁⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⠀⣴⣃⢰⡁⢠⢾⣀⣸⡀⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⢰⠒⠤⢽⠁⢸⠳⠤⢤⡃⠀⠀⠀⠀⠀⠀
              ⠀⠀⠀⠀⠀⠀⠀⡎⠀⠀⠎⠀⠺⣤⡀⠀⠉⡇⠀⠀⠀⠀⠀
              ⠀
            </p>
          </Profile>
        </main>
        <NavigationBar class="navbar-main">
        <NavigationBarButton>
            <template v-slot:icon>
                <MaterialSymbol name="favorite" filled/>
            </template>
        </NavigationBarButton>
        <NavigationBarButton>
            <template v-slot:icon>
                <MaterialSymbol name="star"/>
            </template>
        </NavigationBarButton>
        <NavigationBarButton>
            <template v-slot:icon>
                <MaterialSymbol name="heart_broken" filled/>
            </template>
        </NavigationBarButton>
    </NavigationBar>
    </div>
</template>
