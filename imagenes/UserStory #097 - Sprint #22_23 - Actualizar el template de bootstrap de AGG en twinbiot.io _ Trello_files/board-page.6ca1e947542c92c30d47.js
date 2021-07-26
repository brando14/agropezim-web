(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"./app/scripts/controller/boardPage.js":function(e,a,r){const t=r("./node_modules/react/index.js"),{importWithRetry:s}=r("./packages/use-lazy-component/index.ts"),i=r("./node_modules/bluebird/js/browser/bluebird.js"),{Recents:c}=r("./app/scripts/lib/recents.js"),d=r("./packages/jquery/index.js"),o=r("./node_modules/moment/moment.js"),n=r("./node_modules/effing/lib/index.js"),l=r("./app/scripts/network/api-error.js"),{Auth:g}=r("./app/scripts/db/auth.js"),{navigate:p}=r("./app/scripts/controller/navigate.js"),{getSpinner:u}=r("./app/src/getSpinner.ts"),{currentModelManager:f}=r("./app/scripts/controller/currentModelManager.ts"),{CardDetailLoading:m}=r("./app/src/components/CardDetailLoading/index.ts"),{CardDetailLoadingError:b}=r("./app/src/components/CardDetailLoadingError/index.ts"),{sendChunkLoadErrorEvent:h}=r("./packages/error-reporting/index.ts"),k=function(e){const a=parseInt(e,10);return isNaN(a)?void 0:a};e.exports={cardDetailViewChunkLoaded:!1,boardReferralPage(e,a,r){return this.boardPage(e,"",r)},boardPage(e,a,r){null==a&&(a="");const[,t,...s]=Array.from(a.split("?")[0].split("/")),i={idBoard:e,referrerUsername:r};if("calendar"===t){const e=o().startOf("day");e.year(k(s[0])),e.month(function(e,a){return null!=a?e(a):void 0}(n.sub(1),k(s[1]))),e.date(k(s[2])),e.isValid()&&(i.calendarDate=e.toDate())}if("map"===t&&null!=s[0]&&null!=s[1]){const e=parseFloat(s[0]),a=parseFloat(s[1]),r=parseInt(s[2],10);e&&a&&(i.mapCenterTo={lat:e,lng:a}),r&&(i.zoom=r)}return"member"===t&&null!=s[0]&&(i.usernameBoardProfile=s[0]),"power-ups"===t&&null!=s[0]&&(i.directorySection=s[0],null!=s[1]&&(i.directoryCategory=s[1])),"power-up"===t&&null!=s[0]&&(i.directoryIdPowerUp=s[0],null!=s[1]&&"enable"===s[1]?i.directoryIsEnabling=!0:"view"===s[1]&&null!=s[2]&&(i.powerUpViewKey=s[2])),"butler"===t&&s.length&&("edit"===s[0]&&s[1]?i.butlerCmdEdit=s[1]:"log"===s[0]&&s[1]?i.butlerCmdLog=s[1]:"reports"===s[0]&&s[1]?i.reportType=s[1]:(i.butlerTab=s[0],s[1]&&"new"===s[1]?i.butlerCmdEdit=s[1]:s[1]&&"edit"===s[1]&&s[2]?i.butlerCmdEdit=s[2]:s[1]&&"log"===s[1]&&s[2]&&(i.butlerCmdLog=s[2]))),["calendar","member","power-up","power-ups","map","butler","timeline","calendar-view","dashboard"].includes(t)&&(i.section=t),this.displayBoard(i).done()},oldBoardPage(e){const a={},r=e.split("/");return 1===r.length?a.idBoard=r[0]:a.idBoard=r[1],3===r.length?a.section=r[2]:4===r.length&&(a.usernameBoardProfile=r[3]),this.displayBoard(a).done()},cardPage(e,a){const r=location.hash.length>1?location.hash.substr(1):null,t=this.getQueryParamByKey("replyToComment");return this.displayBoard({idCard:e,highlight:r,replyToComment:t}).done()},oldCardPage(e,a,t){return(()=>{if(/^\d+$/.test(t)){return r("./app/scripts/db/model-loader.js").for("top-level","loadCardId",a,t).catch(l,(()=>null))}return i.resolve(t)})().then((e=>this.displayBoard({idBoard:a,idCard:e}).done()))},showCardDetail(a,d){null==d&&(d={});const{highlight:o,runMethod:n,isNavigating:l,replyToComment:g,onHide:u,onSuccess:k,onFail:v,onAbort:y}=d;if(null==a)return void(y&&y(new Error("card is null")));if(!f.onBoardView((x=a.getBoard(),w=e=>e.id,null!=x?w(x):void 0))||a.modelCache!==this.getCurrentModelCache())return p(this.getCardUrl(a,o,g),{trigger:!0}),void(y&&y(new Error("card is on another board")));var x,w;const C=a.getBoard();let B=!1;const j=r("./app/scripts/views/lib/dialog.js");return e.exports.cardDetailViewChunkLoaded||j.show({reactElement:t.createElement(m,null),hide:()=>{B=!0,u&&u()}}),i.all([s((()=>r.e(41).then(r.t.bind(null,"./app/scripts/views/board/board-view.js",7)))),s((()=>r.e(53).then(r.t.bind(null,"./app/scripts/views/card/card-detail-view.js",7))))]).then((([{default:t},{default:s}])=>{if(e.exports.cardDetailViewChunkLoaded=!0,B)return void(y&&y(new Error("isInterrupted")));const i=new s({modelCache:this.getCurrentModelCache(),model:a}),d=a.getBoard()&&this.applicationView.existingSubviewOrUndefined(t,a.getBoard()),f=this.showingCalendar(d),m=this.showingMap(d);let b,h="";if(f&&(h="calendar"),m){h="map",d.mapReturnCard=null;const e=d.mapView;e.mapCenterTo&&e.zoom&&(b=[e.mapCenterTo.lat,e.mapCenterTo.lng,e.zoom])}this.showingTimeline()&&(h="timeline"),this.showingCalendarView()&&(h="calendar-view"),this.showingAutomaticReports()&&(h="automatic-reports"),j.show({view:i,hide:e=>{r("./app/scripts/views/internal/attachment-viewer.js").clear(),e||(this.setBoardLocation(C.id,h,b),this.title(C.get("name"))),u&&u()},isNavigating:l}),this.waitForId(a,(()=>(p(this.getCardUrl(a,o,g),{replace:this.onCardView(),trigger:!1}),c.add("card",a.id)))),null!=n&&i[n](),null!=o&&i.highlight(o,!0),null!=g&&i.replyToComment(g),k&&k()})).catch((e=>{j.show({reactElement:t.createElement(b,null),hide:()=>{u&&u()}}),h(e),v&&v(e)}))},createFirstBoardPage(){return i.using(u(),(()=>r("./app/scripts/db/model-loader.js").await("boardsData").then((()=>{const e=g.me();if(!e.isLoggedIn())return window.location="/login";if(e.boardList.length>0||e.isDismissed("create-first-board"))return p("/",{trigger:!0});this.clearPreviousView(),this.setViewType("create-first-board"),this.title("Create Your Board");const a=r("./app/scripts/views/onboarding/create-first-board-view.js"),t=this.topLevelView(a,e);return d('[data-js-id="header-container"]').hide(),d("#content").html(t.render().el)})))).done()}}},"./app/scripts/lib/recents.js":function(e,a,r){const{TrelloStorage:t}=r("./packages/storage/index.ts"),s=r("./node_modules/underscore/underscore.js");e.exports.Recents=new class{_getKey(e){return"recent_".concat(e)}add(e,a){const r=this.get(e),i=s.chain([a,...Array.from(r)]).uniq().first(10).value();return t.set(this._getKey(e),i)}get(e,a){let r;return null==a&&(a=10),s.chain(null!=(r=t.get(this._getKey(e)))?r:[]).compact().first(a).value()}}},"./app/scripts/views/onboarding/constants.js":function(e,a,r){const{l:t}=r("./app/scripts/lib/localize.js");e.exports={BOARD_NAME:"board-name",LIST_NAME:"list-name",CARD_NAME:"card-name",CHECKITEM_NAME:"check-name",CARD_DRAG:"card-drag",translatedCardDragFileMap:{cs:r("./resources/images/create-first-board/card-drag/cs-card-drag.gif"),de:r("./resources/images/create-first-board/card-drag/de-card-drag.gif"),en:r("./resources/images/create-first-board/card-drag/en-card-drag.gif"),es:r("./resources/images/create-first-board/card-drag/es-card-drag.gif"),fi:r("./resources/images/create-first-board/card-drag/fi-card-drag.gif"),fr:r("./resources/images/create-first-board/card-drag/fr-card-drag.gif"),hu:r("./resources/images/create-first-board/card-drag/hu-card-drag.gif"),it:r("./resources/images/create-first-board/card-drag/it-card-drag.gif"),ja:r("./resources/images/create-first-board/card-drag/ja-card-drag.gif"),nb:r("./resources/images/create-first-board/card-drag/nb-card-drag.gif"),nl:r("./resources/images/create-first-board/card-drag/nl-card-drag.gif"),pl:r("./resources/images/create-first-board/card-drag/pl-card-drag.gif"),"pt-br":r("./resources/images/create-first-board/card-drag/pt-br-card-drag.gif"),ru:r("./resources/images/create-first-board/card-drag/ru-card-drag.gif"),sv:r("./resources/images/create-first-board/card-drag/sv-card-drag.gif"),th:r("./resources/images/create-first-board/card-drag/th-card-drag.gif"),tr:r("./resources/images/create-first-board/card-drag/tr-card-drag.gif"),uk:r("./resources/images/create-first-board/card-drag/uk-card-drag.gif"),vi:r("./resources/images/create-first-board/card-drag/vi-card-drag.gif"),"zh-hans":r("./resources/images/create-first-board/card-drag/zh-hans-card-drag.gif"),"zh-hant":r("./resources/images/create-first-board/card-drag/zh-hant-card-drag.gif")},translatedCardBackFileMap:{cs:r("./resources/images/create-first-board/card-back/cardBack-cs.svg"),de:r("./resources/images/create-first-board/card-back/cardBack-de.svg"),en:r("./resources/images/create-first-board/card-back/cardBack-en.svg"),es:r("./resources/images/create-first-board/card-back/cardBack-es.svg"),fi:r("./resources/images/create-first-board/card-back/cardBack-fi.svg"),fr:r("./resources/images/create-first-board/card-back/cardBack-fr.svg"),hu:r("./resources/images/create-first-board/card-back/cardBack-hu.svg"),it:r("./resources/images/create-first-board/card-back/cardBack-it.svg"),ja:r("./resources/images/create-first-board/card-back/cardBack-ja.svg"),nb:r("./resources/images/create-first-board/card-back/cardBack-nb.svg"),nl:r("./resources/images/create-first-board/card-back/cardBack-nl.svg"),pl:r("./resources/images/create-first-board/card-back/cardBack-pl.svg"),"pt-br":r("./resources/images/create-first-board/card-back/cardBack-pt-br.svg"),ru:r("./resources/images/create-first-board/card-back/cardBack-ru.svg"),sv:r("./resources/images/create-first-board/card-back/cardBack-sv.svg"),th:r("./resources/images/create-first-board/card-back/cardBack-th.svg"),tr:r("./resources/images/create-first-board/card-back/cardBack-tr.svg"),uk:r("./resources/images/create-first-board/card-back/cardBack-uk.svg"),vi:r("./resources/images/create-first-board/card-back/cardBack-vi.svg"),"zh-hans":r("./resources/images/create-first-board/card-back/cardBack-zh-hans.svg"),"zh-hant":r("./resources/images/create-first-board/card-back/cardBack-zh-hant.svg")},initialData:{name:"",checkItem:"",defaultValue:t(["templates","onboarding","board-name:title"]),lists:[{name:t(["templates","onboarding","list-name:placeholder:0"]),cards:[{name:"",large:!1,defaultValue:t(["templates","onboarding","card-name:placeholder:0"])},{name:"",large:!1},{name:"",large:!1}]},{name:t(["templates","onboarding","list-name:placeholder:1"]),cards:[{name:"",large:!0},{name:"",large:!1},{name:"",large:!0}]},{name:t(["templates","onboarding","list-name:placeholder:2"]),cards:[{name:"",large:!1},{name:"",large:!0},{name:"",large:!1}]}]}}},"./app/scripts/views/onboarding/create-first-board-view.js":function(e,a,r){function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}const i=r("./app/scripts/views/lib/alerts.js"),{Auth:c}=r("./app/scripts/db/auth.js"),d=r("./app/scripts/controller/index.js"),o=r("./app/scripts/views/internal/view.js"),n=r("./node_modules/underscore/underscore.js"),l=r("./app/scripts/views/internal/teacup-with-helpers.js")("onboarding"),g=r("./node_modules/react/index.js"),p=r("./packages/react-dom-wrapper/index.ts"),u=r("./app/scripts/views/onboarding/create-first-board.js"),{ErrorBoundary:f}=r("./app/src/components/ErrorBoundary/index.ts"),{Feature:m}=r("./app/scripts/debug/constants.ts");class b extends o{static initClass(){this.prototype.tagName="div",this.prototype.className="first-board-wrapper"}render(){return this.$el.html(l.renderable((()=>l.div(".first-board-wrapper.js-create-first-board")))),p.render(g.createElement(f,{tags:{ownershipArea:"trello-bizteam",feature:m.Madlibs}},g.createElement(u,{onSubmit:e=>this.createBoard(e)})),this.$(".js-create-first-board")[0]),this}createCollection(e,a,...r){const[i]=Array.from(r.slice(0,r.length-0));return e.filter((e=>""!==e.name)).map((({name:e},r)=>a.create(function(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){s(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}({name:e,pos:r+1,creationMethod:"assisted"},i))))}createBoard(e){const a={name:e.name},r=n.extend({prefs_permissionLevel:"private",prefs_selfJoin:!0,prefs_background:"lime",creationMethod:"assisted",defaultLists:!1},a),t=c.me().boardList.create(a,{requestData:r,success:e=>{let a,r;if(r=e.id,!Array.from(a=c.me().get("idBoards")).includes(r))return c.me().set("idBoards",a.concat(e.id))},error:()=>i.flash("could not create board","error","createBoardError")});return this.listenTo(this.model.boardList,"sync",(()=>{const a=this.createCollection(e.lists,t.listList);return this.listenTo(a[0],"sync",(()=>{const r=this.createCollection(e.lists[0].cards,a[0].cardList),s=e.checkItem;return n.isEmpty(s)?this.navigateToNewBoard(t):this.listenTo(r[0],"sync",(()=>{const e=this.createCollection(["Checklist"],r[0].checklistList,{idCard:r[0].id})[0];return this.listenTo(e,"sync",(()=>{const a=this.createCollection([{name:s}],e.checkItemList)[0];return this.listenTo(a,"sync",(()=>this.navigateToNewBoard(t)))}))}))}))}))}navigateToNewBoard(e){return c.me().dismiss("create-first-board"),d.displayBoard({idBoard:e.id,openListComposer:!1,openCardComposerInFirstList:!0}).done()}}b.initClass(),e.exports=b},"./app/scripts/views/onboarding/create-first-board.js":function(e,a,r){const t=r("./packages/browser/index.ts"),s=r("./node_modules/react/index.js"),i=r("./app/scripts/views/internal/recup-with-helpers.js")("onboarding"),{l:c}=r("./app/scripts/lib/localize.js"),{trackUe:d}=r("./packages/analytics/index.ts"),{BOARD_NAME:o,LIST_NAME:n,CARD_NAME:l,CHECKITEM_NAME:g,CARD_DRAG:p,initialData:u,translatedCardDragFileMap:f,translatedCardBackFileMap:m}=r("./app/scripts/views/onboarding/constants.js"),{getTranslatedFile:b}=r("./app/scripts/views/onboarding/helpers.js"),{CreateFirstBoardIds:h}=r("./packages/test-ids/index.ts"),k=r("./packages/locale/index.ts"),v=r("./node_modules/uuid/v4.js"),y=t.isIE()||t.isEdge(),x=v();class w extends s.Component{static initClass(){this.prototype.render=i.renderable((function(){const{currentStep:e}=this.state;return i.div(".first-board-container",(()=>(i.div(".first-board-column.first-board-image.board-name-background",{role:"presentation","aria-hidden":!0},(()=>i.div(".first-board-image-wrapper",(()=>i.div(".first-board-image-base",{className:i.classify({"first-board-image-base--mod-card-drag":e===p,"first-board-image-base--mod-ie":e===g&&y})},(()=>this.renderPreview())))))),i.div(".first-board-column.first-board-content-wrapper",(()=>i.div(".first-board-content",(()=>(i.nav(".first-board-navigation",(()=>(i.a(".skip-nav",{href:"#".concat(x),ref:e=>this.skipRef=e},(()=>i.format("skip-nav"))),this.steps.map(((a,r)=>i.createElement("button",{key:"nav".concat(r),className:i.classify({"current-step":a===e}),onClick:()=>this.goToStep(a,"by clicking navigation dot"),"aria-label":i.l("go-to-step:".concat(a))})))))),i.div(".first-board-text-wrapper",{"aria-live":"polite"},(()=>i.div(".first-board-text",{id:x},(()=>(this.renderStepChildren(),this.renderFooter())))))))))))))}))}constructor(e){super(...arguments),this.steps=[o,n,l,g,p],this.state={currentStep:o,board:u,saving:!1,hasStarted:!1},this.handleClickBack=this.handleClickBack.bind(this)}skipToContent(){return null!=this.skipRef?this.skipRef.click():void 0}validate(){const{currentStep:e,board:a}=this.state;return e===o?""!==a.name:e===n?a.lists.filter((e=>""!==e.name)).length===u.lists.length:e!==l||""!==a.lists[0].cards[0].name}continue(){return this.isLastStep()?this.submit():this.goToStep(this.steps[this.steps.indexOf(this.state.currentStep)+1],"by clicking on continue footer")}submit(e){let a;if(null==e&&(e=!1),this.state.saving)return;const r=this.state.board;for(""===r.name.trim()&&(r.name=u.defaultValue),a=0;a<r.lists.length;a++){const e=r.lists[a];""===e.name.trim()&&(e.name=u.lists[a].name)}for(a=0;a<r.lists[0].cards.length;a++){const e=r.lists[0].cards[a];""===e.name.trim()&&(e.name=u.lists[0].cards[a].defaultValue||"")}return""===r.checkItem.trim()&&(r.checkItem=""),d("create first board view","creates","board","","",e?"by clicking skip":"by clicking on the submit footer",{currentStep:this.state.currentStep,stepCompleted:this.validate()}),this.setState({saving:!0},(()=>this.props.onSubmit(r)))}isLastStep(){return this.steps.indexOf(this.state.currentStep)===this.steps.length-1}goToStep(e,a){d("create first board view","navigates","","","to new step",a,{currentStep:this.state.currentStep,nextStep:e,stepCompleted:this.validate()});const r=this.state;return e!==o&&e!==n?(r.board.lists[1].cards=[],r.board.lists[2].cards=[]):(r.board.lists[1].cards=u.lists[1].cards,r.board.lists[2].cards=u.lists[2].cards),r.currentStep=e,r.hasStarted=!0,this.setState(r),this.skipToContent()}handleClickBack(){return window.history.back()}updateBoard(e){return this.setState({board:Object.assign(this.state.board,{name:e})})}updateList(e,a){const r=this.state;return this.setState((()=>(r.board.lists[e]={name:a,cards:this.state.board.lists[e].cards},r)))}updateCard(e,a){const r=this.state;return this.setState((()=>(r.board.lists[0].cards[e]={name:a},r)))}updateCheckItem(e){const a=this.state;return this.setState((()=>(a.board.checkItem=e,a)))}handleClickFooter(e){if(0!==e.detail)return this.continue()}handleKeyPressSubmit(e){if(this.validate()&&"Enter"===e.key)return this.continue()}handleListKeyPress(e,a){if(this.validate()&&"Enter"===e.key)return[0,1].includes(a)?this["listInputRef".concat(a+1)].select():this.continue()}renderStepChildren(){const{currentStep:e,board:a}=this.state;return e===o?i.section(".".concat(o),(()=>(i.h1((()=>i.format("".concat(o,":title")))),i.p((()=>(i.format("".concat(o,":description")),i.span(".show-point-right",{role:"presentation","aria-hidden":!0},(()=>i.format("that-thing-over-there"))),i.span(".show-point-up",{role:"presentation","aria-hidden":!0},(()=>i.format("that-thing-up-there")))))),i.p((()=>i.format("".concat(o,":instructions")))),i.input({type:"text",placeholder:i.l("".concat(o,":placeholder:0")),maxLength:"32",value:a.name,onChange:e=>this.updateBoard(e.target.value),onKeyPress:e=>this.handleKeyPressSubmit(e),"data-test-id":h.BoardNameInput,ref:e=>this.ref0=e,"aria-label":i.l("board-name")})))):e===n?i.section(".".concat(n),(()=>(i.h1((()=>i.format("".concat(n,":title")))),i.p((()=>i.format("".concat(n,":description")))),i.p((()=>i.format("".concat(n,":instructions")))),i.input({type:"text",value:a.lists[0].name,maxLength:"16",onChange:e=>this.updateList(0,e.target.value),onKeyPress:e=>this.handleListKeyPress(e,0),"data-test-id":h.ListNameInput,ref:e=>this.listInputRef0=e,"aria-label":i.l("list-name",{list_number:1})}),i.input({type:"text",value:a.lists[1].name,maxLength:"16",onChange:e=>this.updateList(1,e.target.value),onKeyPress:e=>this.handleListKeyPress(e,1),ref:e=>this.listInputRef1=e,"aria-label":i.l("list-name",{list_number:2})}),i.div(".third-input",(()=>(i.span((()=>i.format("and"))),i.input({type:"text",maxLength:"16",value:a.lists[2].name,onChange:e=>this.updateList(2,e.target.value),onKeyPress:e=>this.handleListKeyPress(e,2),ref:e=>this.listInputRef2=e,"aria-label":i.l("list-name",{list_number:3})})))),i.p(".post-input",(()=>i.format("go-ahead-and-rename-your-lists-if-youd-like-a11y")))))):e===l?i.section(".".concat(l),(()=>(i.h1((()=>i.format("".concat(l,":title")))),i.p((()=>i.format("".concat(l,":description")))),i.p((()=>i.span({dangerouslySetInnerHTML:{__html:i.l("".concat(l,":instructions"),{listName:a.lists[0].name})}}))),i.input({type:"text",placeholder:i.l("".concat(l,":placeholder:0")),maxLength:"32",value:a.lists[0].cards[0].name,onChange:e=>this.updateCard(0,e.target.value),onKeyPress:e=>this.handleKeyPressSubmit(e),"data-test-id":h.CardNameInput,ref:e=>this.ref0=e,"aria-label":i.l("card-name",{card_number:1})}),i.input({type:"text",placeholder:i.l("".concat(l,":placeholder:1")),maxLength:"32",value:a.lists[0].cards[1].name,onChange:e=>this.updateCard(1,e.target.value),onKeyPress:e=>this.handleKeyPressSubmit(e),"aria-label":i.l("card-name",{card_number:2})}),i.div(".third-input",(()=>(i.span((()=>i.format("and"))),i.input({type:"text",placeholder:i.l("".concat(l,":placeholder:2")),maxLength:"32",value:a.lists[0].cards[2].name,onChange:e=>this.updateCard(2,e.target.value),onKeyPress:e=>this.handleKeyPressSubmit(e),"aria-label":i.l("card-name",{card_number:3})}))))))):e===g?i.section(".".concat(g),(()=>(i.h1((()=>i.format("".concat(g,":title")))),i.p((()=>i.format("".concat(g,":description")))),i.p({dangerouslySetInnerHTML:{__html:i.l("".concat(g,":instructions"),{cardName:a.lists[0].cards[0].name})}}),i.div(".checklist-item",(()=>(i.div(".checklist-box"),i.input({type:"text",placeholder:i.l("".concat(g,":placeholder:0")),maxLength:"28",value:a.checkItem,onChange:e=>this.updateCheckItem(e.target.value),onKeyPress:e=>this.handleKeyPressSubmit(e),"data-test-id":h.ChecklistInput,ref:e=>this.ref0=e,"aria-label":i.l("checklist-name")}))))))):e===p?i.section(".".concat(p),(()=>(i.h1((()=>i.format("".concat(p,":title")))),i.p((()=>i.format("".concat(p,":description"))))))):void 0}renderPreview(){const{currentStep:e,board:a,hasStarted:r}=this.state,t=a.lists[0].cards[0];return e===p?(i.img({src:b(f,k.currentLocale)}),i.div((()=>(i.h2((()=>i.format("one-last-tip"))),i.p((()=>i.format("get-those-cards-moving"))))))):(i.div(".board-name-display",(()=>i.p({className:i.classify({"is-active":!!a.name}),"data-test-id":h.BoardNameDisplay},(()=>i.text(a.name))))),i.div(".first-board-image-list-container",(()=>(()=>{const e=[];for(const t in a.lists){const s=a.lists[t];e.push(i.div(".first-board-image-list.list-name-display",{className:i.classify({"first-board-image-list-empty":0===s.cards.length})},(()=>(i.p({className:i.classify({"is-active":r&&""!==s.name}),"data-test-id":"0"===t?h.ListNameDisplay:void 0},(()=>{if(r)return i.text(s.name)})),(()=>{const e=[];for(const a in s.cards){const r=s.cards[a];e.push(i.div(".first-board-image-card.card-name-display",{className:i.classify({large:!!r.large})},(()=>i.p({className:i.classify({"is-active":!!r.name}),"data-test-id":"0"===t&&"0"===a?h.CardNameDisplay:void 0},(()=>i.text(r.name))))))}return e})()))))}return e})())),e===g?i.div(".first-board-card-back",(()=>(i.img({src:b(m,k.currentLocale),className:"check-name-image"}),i.div(".check-name-display",(()=>(i.p((()=>i.text(t.name||c("untitled card")))),a.checkItem?i.p({"data-test-id":h.ChecklistDisplay},(()=>i.text(a.checkItem))):i.p(".check-name-placeholder",(()=>i.format("add-an-item"))))))))):void 0)}renderFooter(){const{currentStep:e,saving:a}=this.state;return i.button({key:"next-button:".concat(e),className:i.classify({"first-board-continue-footer":!0,"is-active":this.validate()&&!a,"submit-footer":this.isLastStep(),disabled:!this.validate()||a}),onClick:e=>this.handleClickFooter(e),onKeyDown:e=>this.handleKeyPressSubmit(e),"data-test-id":h.ContinueButton,disabled:!this.validate()||a,ref:e=>this.footer=e,"aria-label":this.isLastStep()?i.l("go-to-my-board"):i.l("next-step")},(()=>this.isLastStep()?i.format("now-youre-a-pro-keep-building-your-board"):i.icon("down",{role:"presentation","aria-hidden":!0})))}}w.initClass(),e.exports=w},"./app/scripts/views/onboarding/helpers.js":function(e,a,r){const t=r("./packages/locale/index.ts"),s=function(){const e=t.currentLocale.toLowerCase();return(()=>{switch(!1){case"zh-tw"!==e:return"zh-hant";case"zh-cn"!==e:return"zh-hans";case"zh-hant"!==e:return"zh-hant";case"zh-hans"!==e:return"zh-hans";case"pt-br"!==e:return"pt-br";default:return e.split("-")[0]}})()};e.exports={getLocale:s,getTranslatedFile:function(e,a){const r=s();return Object.keys(e).includes(r)?e[r]:e.en}}},"./app/src/components/CardDetailLoading/index.ts":function(e,a,r){"use strict";r.r(a),r.d(a,"CardDetailLoading",(function(){return g}));var t=r("./node_modules/react/index.js"),s=r.n(t),i=r("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=r.n(i),d=r("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./app/src/components/CardDetailLoading/CardDetailLoading.less"),o={insert:"head",singleton:!1},n=(c()(d.a,o),d.a.locals||{}),l=r("./packages/nachos/src/components/Spinner/index.ts");const g=()=>s.a.createElement("div",{className:"".concat(n.cardDetailLoading)},s.a.createElement(l.a,{centered:!0}))},"./app/src/components/CardDetailLoadingError/index.ts":function(e,a,r){"use strict";r.r(a),r.d(a,"CardDetailLoadingError",(function(){return m}));var t=r("./node_modules/react/index.js"),s=r.n(t),i=r("./packages/nachos/button.ts"),c=r("./packages/i18n/index.ts"),d=r("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=r.n(d),n=r("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./app/src/components/CardDetailLoadingError/CardDetailLoadingError.less"),l={insert:"head",singleton:!1},g=(o()(n.a,l),n.a.locals||{});const p=Object(c.forTemplate)("error"),u=Object(c.forTemplate)("connect_failed"),f=()=>window.location.reload(),m=e=>(Object(t.useEffect)((()=>{const e=document.querySelector(".window");return null!==e&&(e.style.display="block",document.body.classList.add("window-up")),()=>{null!==e&&(e.style.display="none",document.body.classList.remove("window-up"))}})),s.a.createElement("div",{className:"".concat(g.errorMessage)},s.a.createElement("button",{className:"icon-md icon-close dialog-close-button js-close-window",onClick:e.onClose}),s.a.createElement("div",{className:"u-clearfix"},s.a.createElement("img",{alt:"Taco",src:r("./resources/images/taco-sleep.svg")}),s.a.createElement("h4",null,p("card-detail-loading-error")),s.a.createElement("p",null,p("reload-call-to-action")),s.a.createElement(i.Button,{appearance:"primary",onClick:f},u("reload-page")))))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./app/src/components/CardDetailLoading/CardDetailLoading.less":function(e,a,r){"use strict";var t=r("./node_modules/css-loader/dist/runtime/api.js"),s=r.n(t)()(!1);s.push([e.i,"._1AAWyQJ4LX_Ioq {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 600px;\n}\n",""]),s.locals={cardDetailLoading:"_1AAWyQJ4LX_Ioq"},a.a=s},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./app/src/components/CardDetailLoadingError/CardDetailLoadingError.less":function(e,a,r){"use strict";var t=r("./node_modules/css-loader/dist/runtime/api.js"),s=r.n(t)()(!1);s.push([e.i,"._2DP9EoHN5coOOz {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 600px;\n}\n._2DP9EoHN5coOOz > button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n}\n._2DP9EoHN5coOOz div {\n  display: block;\n  text-align: center;\n  height: 100%;\n}\n._2DP9EoHN5coOOz div h4 {\n  font-size: 20px;\n  margin: 20px 16px 24px;\n}\n._2DP9EoHN5coOOz div p {\n  font-size: 16px;\n  margin: 0 0 16px;\n}\n",""]),s.locals={errorMessage:"_2DP9EoHN5coOOz"},a.a=s},"./resources/images/create-first-board/card-back/cardBack-cs.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-cs.da88ba2b87756e37dc71.svg"},"./resources/images/create-first-board/card-back/cardBack-de.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-de.1f1906cbf136a5529039.svg"},"./resources/images/create-first-board/card-back/cardBack-en.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-en.bc8f75771b6bf83f27a2.svg"},"./resources/images/create-first-board/card-back/cardBack-es.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-es.4a04173f3aa68f147769.svg"},"./resources/images/create-first-board/card-back/cardBack-fi.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-fi.e6ef461dcf85a18f0553.svg"},"./resources/images/create-first-board/card-back/cardBack-fr.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-fr.800f75bf5809d9c98578.svg"},"./resources/images/create-first-board/card-back/cardBack-hu.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-hu.d986f0bc15943e21f060.svg"},"./resources/images/create-first-board/card-back/cardBack-it.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-it.942ddddf43958cd47711.svg"},"./resources/images/create-first-board/card-back/cardBack-ja.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-ja.decf4aff11bd48f0c577.svg"},"./resources/images/create-first-board/card-back/cardBack-nb.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-nb.830406f0879a11803281.svg"},"./resources/images/create-first-board/card-back/cardBack-nl.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-nl.e93360b401f94ff21424.svg"},"./resources/images/create-first-board/card-back/cardBack-pl.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-pl.ddfe63e2098eec1b2ddb.svg"},"./resources/images/create-first-board/card-back/cardBack-pt-br.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-pt-br.9c3cc54b71e9a3d9de54.svg"},"./resources/images/create-first-board/card-back/cardBack-ru.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-ru.77281bd1c88eeaea4a1e.svg"},"./resources/images/create-first-board/card-back/cardBack-sv.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-sv.1ef4ada05c8e15875208.svg"},"./resources/images/create-first-board/card-back/cardBack-th.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-th.ef9674d83622e799fdb8.svg"},"./resources/images/create-first-board/card-back/cardBack-tr.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-tr.1baffc6274e721d9d532.svg"},"./resources/images/create-first-board/card-back/cardBack-uk.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-uk.800fcf7f3a63d21be04b.svg"},"./resources/images/create-first-board/card-back/cardBack-vi.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-vi.cb9c5c822aad438d7174.svg"},"./resources/images/create-first-board/card-back/cardBack-zh-hans.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-zh-hans.1bb7167a0e06e1cd57c9.svg"},"./resources/images/create-first-board/card-back/cardBack-zh-hant.svg":function(e,a,r){e.exports=r.p+"images/create-first-board/card-back/cardBack-zh-hant.d43f08d671326e47d491.svg"},"./resources/images/create-first-board/card-drag/cs-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/cs-card-drag.45f7b47656a76e2c9b63.gif"},"./resources/images/create-first-board/card-drag/de-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/de-card-drag.8eb16913a6659e67ff64.gif"},"./resources/images/create-first-board/card-drag/en-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/en-card-drag.a968a8b862b1b598bfb2.gif"},"./resources/images/create-first-board/card-drag/es-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/es-card-drag.6cae1591b2baee65ce6e.gif"},"./resources/images/create-first-board/card-drag/fi-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/fi-card-drag.5a5001ee8cfb8ee798b5.gif"},"./resources/images/create-first-board/card-drag/fr-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/fr-card-drag.ff794c8c55fb35dbf3c0.gif"},"./resources/images/create-first-board/card-drag/hu-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/hu-card-drag.59f59dc3311ae40151b5.gif"},"./resources/images/create-first-board/card-drag/it-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/it-card-drag.02ad166675d935c80f45.gif"},"./resources/images/create-first-board/card-drag/ja-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/ja-card-drag.0ddec2778984b56de963.gif"},"./resources/images/create-first-board/card-drag/nb-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/nb-card-drag.63b1d76da8445c37aa6f.gif"},"./resources/images/create-first-board/card-drag/nl-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/nl-card-drag.fcf625c3f53d6d0c3ff8.gif"},"./resources/images/create-first-board/card-drag/pl-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/pl-card-drag.558f8bd03bfc1a5551af.gif"},"./resources/images/create-first-board/card-drag/pt-br-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/pt-br-card-drag.12369bade9ca44bf159b.gif"},"./resources/images/create-first-board/card-drag/ru-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/ru-card-drag.478c2ce37a55fc99b3de.gif"},"./resources/images/create-first-board/card-drag/sv-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/sv-card-drag.41ae4e95e9c9fbe20be3.gif"},"./resources/images/create-first-board/card-drag/th-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/th-card-drag.7aa5831fa77d5494dc68.gif"},"./resources/images/create-first-board/card-drag/tr-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/tr-card-drag.d121b2a86bd708202081.gif"},"./resources/images/create-first-board/card-drag/uk-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/uk-card-drag.b05743da18ce0a1cafe1.gif"},"./resources/images/create-first-board/card-drag/vi-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/vi-card-drag.8c27bf4c1414f3fb33df.gif"},"./resources/images/create-first-board/card-drag/zh-hans-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/zh-hans-card-drag.795c48a1e24e353f59af.gif"},"./resources/images/create-first-board/card-drag/zh-hant-card-drag.gif":function(e,a,r){e.exports=r.p+"images/create-first-board/card-drag/zh-hant-card-drag.53fc4eebdf0af23fb427.gif"}}]);
//# sourceMappingURL=board-page.6ca1e947542c92c30d47.js.map