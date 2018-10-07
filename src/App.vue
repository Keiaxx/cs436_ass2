<template>
    <v-app>
        <v-navigation-drawer
                persistent
                :mini-variant="miniVariant"
                :clipped="clipped"
                v-model="drawer"
                enable-resize-watcher
                fixed
                app
        >
            <v-list>
                <v-list-tile v-for="(item, i) in items" :key="i" @click="navipage(item[2])">
                    <v-list-tile-title v-text="item[0]"></v-list-tile-title>
                    <v-list-tile-action>
                        <v-icon v-text="item[1]"></v-icon>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar
                app
                :clipped-left="clipped"
        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content>
            <router-view/>
        </v-content>

        <v-footer :fixed="fixed" app>
            <v-spacer></v-spacer>
            <span> Adrian Gose &copy; 2018</span>
        </v-footer>
    </v-app>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                clipped: true,
                drawer: true,
                fixed: true,
                items: [
                    ['Caesar Cipher (Question 2)', 'format_list_numbered', 'caesarcipher'],
                    ['One Time Pad (Question 4)', 'format_list_numbered', 'onetimepad'],
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'Assignment 2 (cs436)  '
            }
        },
        methods: {

            navipage(page) {
                this.$router.push({
                    name: page
                })
            }
        }
    }
</script>
