// TypeIt.js

new TypeIt("#wrongtype .type-2",{
	startDelay:150,
	waitUntilVisible: true
}).pause(180).delete(10).pause(180).type("<span class='func'>push</span>(<span class='number'>4</span>);").go();