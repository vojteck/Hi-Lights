(this.webpackJsonphilights=this.webpackJsonphilights||[]).push([[0],{49:function(e,t,n){e.exports=n(78)},78:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),l=n(7),u=n(38),o=n(13),m=n.n(o),s=n(19),f=n(12),p=n(39),d=n.n(p);function h(){return E.apply(this,arguments)}function E(){return(E=Object(s.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://www.scorebat.com/video-api/v1/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=Object(f.b)("matches/getAllMatches",Object(s.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h().then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),j=Object(f.c)({name:"matches",initialState:{matches:[],selectedCompetitions:[]},reducers:{selectCompetition:function(e,t){e.selectedCompetitions.push(parseInt(t.payload))},unselectCompetition:function(e,t){e.selectedCompetitions=e.selectedCompetitions.filter((function(e){return e!==parseInt(t.payload)}))}},extraReducers:Object(u.a)({},b.fulfilled,(function(e,t){e.matches=t.payload}))}),v=j.actions,O=v.selectCompetition,g=v.unselectCompetition,y=(v.toggleCompetition,j.reducer),C=n(80),x=n(81),w=n(82),k=n(83),I=n(46),N=n(84),F=n(85);function M(e){var t=Object(a.useState)(!1),n=Object(I.a)(t,2),r=n[0],i=n[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(N.a.Item,{action:!0,onClick:function(){return i(!r)}},c.a.createElement("div",{className:"d-flex justify-content-center p-1"},e.match.title),c.a.createElement(F.a,{in:r},c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.match.embed}}))))}var S=n(9),J=(Object(S.a)((function(e){return e.matches.matches}),(function(e){return e})),Object(S.a)((function(e){return e.matches.matches}),(function(e){return e.matches.selectedCompetitions}),(function(e,t){return e.filter((function(e){return t.includes(e.competition.id)}))}))),_=Object(S.a)((function(e){return e.matches.matches}),(function(e){return e.map((function(e){return e.competition})).filter((function(e,t,n){return n.map((function(e){return e.id})).indexOf(e.id)===t}))}));function A(){var e=Object(l.c)((function(e){return e}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"lead"},"Matches"),c.a.createElement("hr",{class:"my-3"}),c.a.createElement(N.a,null,e&&J(e).map((function(e){return c.a.createElement(M,{key:e.title,match:e})}))))}function B(e){var t=Object(l.b)(),n=Object(l.c)((function(e){return e.matches.selectedCompetitions})).includes(e.competition.id),a=n?"primary":"light";return c.a.createElement(c.a.Fragment,null,c.a.createElement(N.a.Item,{onClick:function(){t(n?g(e.competition.id):O(e.competition.id))},action:!0,variant:a},c.a.createElement("div",{className:"d-flex justify-content-center"},e.competition.name)))}function H(){var e=Object(l.c)((function(e){return e}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"lead"},"Competitions"),c.a.createElement("hr",{class:"my-3"}),c.a.createElement(N.a,{variant:"flush"},e&&_(e).map((function(e){return c.a.createElement(B,{key:e.id,competition:e})}))))}function L(){var e=Object(l.b)();return Object(a.useEffect)((function(){e(b())}),[]),c.a.createElement(C.a,{fluid:!0,className:"p-4"},c.a.createElement(x.a,{className:"justify-content-md-center"},c.a.createElement(w.a,{xs:!0,lg:"2"}),c.a.createElement(w.a,{xs:!0,lg:"5"},c.a.createElement(k.a,null,c.a.createElement(A,null))),c.a.createElement(w.a,{xs:!0,lg:"3"},c.a.createElement(k.a,null,c.a.createElement(H,null))),c.a.createElement(w.a,{xs:!0,lg:"2"})))}var R=n(16),T=Object(f.a)({reducer:{matches:y,middleware:[R.a]}}),q=n(45);n(76);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,{store:T},c.a.createElement(q.a,null,c.a.createElement(L,null)))),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.6733017f.chunk.js.map