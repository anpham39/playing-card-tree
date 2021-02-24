<template>
    <div>
        <h1>Instructions for the task</h1>

        <h2>Goal</h2>

        Create a three level tree of playing cards, that can be clicked to expand and collapse items, as well
        as to select them to be displayed on the detail component.

        <h2>Steps</h2>

        <ul>
            <li>
                Create an expandable and collapsible tree component of playing cards and place it inside
                the overview component.
            </li>
            <li>
                The tree should support at least three levels and use <code>cards</code> from the vuex
                module <code>deckOfCards</code> as its data source. The levels should be

                <ul>
                    <li>
                        Suit (e.g. Diamonds)

                        <ul>
                            <li>
                                Named (Ace through Jack) or Numbered (1 through 10)

                                <ul>
                                    <li>Card name, e.g. "A of Diamonds"</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                For each row in the tree, have a component which can be used to expand and collapse the subtree, and a label
                component, which can be used to choose the card.
            </li>
            <li>
                When a card is chosen in the tree by clicking the label component, update the <code>vue-router</code>'s route
                to get the card details to be shown by the <code>detail.vue</code>.
            </li>
        </ul>

        <h2>Additional information</h2>

        <ul>
            <li>You may change any piece of code as you wish to improve it or make it better suited for your task.</li>
            <li>If you would like to improve the styling also on the detail view, that is ok.</li>
            <li>
                Submit the completed package to Aino, as a zip archive, without <code>node_modules</code> or other
                build-related products.
            </li>
        </ul>
    </div>
</template>


<style scoped lang="scss">
    @import '../app.scss';

    $double-padding: $default-padding * 2;
    $half-padding: $default-padding / 2;

    h2 { margin-top: $double-padding; }

li > ul,
    li + li { padding-top: $half-padding; }
</style>


<script>
    export default {
        name: 'Instructions',
    };
</script>
