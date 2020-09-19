(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{63:function(e,a,t){e.exports=t.p+"static/media/logo.950ba665.png"},67:function(e,a,t){e.exports=t(84)},72:function(e,a,t){},73:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(62),c=t.n(r),s=(t(72),t(73),t(63)),i=t.n(s),m=t(10),o=t(26),u=t(8),d=t(28),p=t.n(d);var E=l.a.memo((function(e){var a=e.launchData,t=a.id,n=a.name,r=a.success,c=a.flight_number,s=a.date_utc,i=a.links;return l.a.createElement("div",{className:"card vertical"},l.a.createElement("div",{className:"card-header ".concat(r?"success":"failure")},l.a.createElement("img",{className:"card-img-top",src:i.patch.small,alt:"Patch"}),l.a.createElement("h5",{className:"card-title"},n)),l.a.createElement("div",{className:"card-body"},l.a.createElement("h6",null,"Id: ",l.a.createElement("span",null,t)),l.a.createElement("h6",null,"Flight Number: ",l.a.createElement("span",null,c)),l.a.createElement("h6",null,"Date: ",l.a.createElement("span",null,p()(s,"dS mmm, yyyy"))),l.a.createElement("h6",null,"Time: ",l.a.createElement("span",null,p()(s,"hh:MM:ss TT"))),l.a.createElement("h6",null,"Day: ",l.a.createElement("span",null,p()(s,"dddd")))),l.a.createElement("div",{className:"card-footer"},l.a.createElement("div",{className:"btn-row"},l.a.createElement("a",{href:i.webcast,className:"btn btn-info",target:"_blank",rel:"noopener noreferrer"},"Webcast"),l.a.createElement("a",{href:i.article,className:"btn btn-warning",target:"_blank",rel:"noopener noreferrer"},"Article"),l.a.createElement("a",{href:i.wikipedia,className:"btn btn-info",target:"_blank",rel:"noopener noreferrer"},"Wikipedia")),l.a.createElement(o.b,{to:"/launch/".concat(t),className:"btn btn-fluid btn-dark",rel:"noopener noreferrer"},"More")))})),h=t(33);function g(){var e=Object(h.a)(["\nquery RocketQuerry($id: String!) {\n    launchpad(id: $id) {\n        name,\n        full_name\n        locality\n        region\n        timezone\n        latitude\n        longitude\n        launch_attempts\n        launch_successes\n        rockets\n        launches\n        details\n        status\n    }\n}\n"]);return g=function(){return e},e}function f(){var e=Object(h.a)(["\nquery RocketQuerry($id: String!) {\n    rocket(id: $id) {\n        name\n        type\n        active\n        stages\n        boosters\n        cost_per_launch\n        success_rate_pct\n        first_flight\n        country\n        company\n        wikipedia\n        description\n        flickr_images\n        height {\n            meters\n            feet\n        }\n        diameter {\n            meters\n            feet\n        }\n        mass {\n            kg\n            lb\n        }\n        landing_legs {\n            number\n            material\n        }\n        payload_weights {\n            id\n            name\n            kg\n            lb\n        }\n        engines {\n            number\n            type\n            version\n            layout\n            engine_loss_max\n            propellant_1\n            propellant_2\n            thrust_to_weight\n            isp {\n                sea_level\n                vacuum\n            }\n            thrust_sea_level {\n                kN\n                lbf\n            }\n            thrust_vacuum {\n                kN\n                lbf\n            }\n        }\n    }\n}\n"]);return f=function(){return e},e}function b(){var e=Object(h.a)(["\nquery LaunchQuerry($id: String!) {\n    launch(id: $id) {\n        flight_number\n        name\n        success\n        static_fire_date_utc\n        static_fire_date_unix\n        date_utc\n        date_local\n        date_unix\n        launchpad\n        details\n        rocket\n        upcoming\n        crew\n        ships\n        capsules\n        payloads\n        window\n        failures {\n            time\n            altitude\n            reason\n        }\n        links {\n            patch {\n                small\n                large\n            }\n            reddit {\n                campaign\n                launch\n                media\n                recovery\n            }\n            flickr {\n                small\n                original\n            }\n            webcast\n            article\n            wikipedia\n        }\n        cores {\n            core\n            flight\n            gridfins\n            legs\n            reused\n            landing_attempt\n            landing_success\n            landing_type\n            landpad\n        }\n    }  \n}\n"]);return b=function(){return e},e}function N(){var e=Object(h.a)(["\n  query LaunchesQuerry {\n    launches {\n        id\n        name\n        success\n        flight_number\n        date_utc\n        links {\n            patch {\n                small\n            }\n            webcast\n            article\n            wikipedia\n        }\n    }\n  }\n"]);return N=function(){return e},e}var v=Object(m.gql)(N()),_=Object(m.gql)(b()),k=Object(m.gql)(f()),y=Object(m.gql)(g());var w=function(){var e=Object(m.useQuery)(v),a=e.loading,t=e.error,n=e.data;if(a)return l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("h4",{className:"loading"},"Loading..."),l.a.createElement("div",{className:"spinner-border ml-auto",role:"status","aria-hidden":"true"}));if(t)return console.log(t),l.a.createElement("h2",{className:"loading"},l.a.createElement("span",{role:"img","aria-label":"warn-emoji"},"\u26a0\ufe0f"),"Error Fetching Launchpad Data");var r=n.launches,c=n.launches.filter((function(e){return!e.success}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"launches"},l.a.createElement("div",{className:"launch-header"},l.a.createElement("h2",{className:"title success"},l.a.createElement("span",{role:"img","aria-label":"rocket-emoji"},"\ud83d\ude80"),"All Launches (",r.length,")"),l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search All Launches","aria-label":"Search All Launches"}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-outline-success",type:"button"},"search")))),l.a.createElement("div",{className:"launch-list-wrapper success"},r.map((function(e){return l.a.createElement(E,{key:e.id,launchData:e})})))),l.a.createElement("div",{className:"launches"},l.a.createElement("div",{className:"launch-header"},l.a.createElement("h2",{className:"title failed"},l.a.createElement("span",{role:"img","aria-label":"warn-emoji"},"\u26a0\ufe0f"),"Failed Launches (",c.length,")"),l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search Failed Launches","aria-label":"Search Failed Launches"}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-outline-success",type:"button"},"search")))),l.a.createElement("div",{className:"launch-list-wrapper failures"},c.map((function(e){return l.a.createElement(E,{key:e.id,launchData:e})})))))};var x=l.a.memo((function(e){var a=e.payload,t=a.name,n=a.success,r=a.date_utc,c=a.flight_number,s=a.window,i=a.links,m=a.details;return l.a.createElement("div",{className:"card horizontal"},l.a.createElement("div",{className:"card-header horizontal"},"General Info"),l.a.createElement("div",{className:"card-body horizontal"},l.a.createElement("div",{className:"left"},l.a.createElement("h5",{className:"card-title"},t),l.a.createElement("p",{className:"general-desc"},m),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",null,"Flight number:")," ",c),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",null,"Successful:")," ",n?"Yes":"No"),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",null,"Date (UTC):")," ",p()(r,"dddd, mmmm dS, yyyy, hh:MM:ss TT")),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",null,"Windows:")," ",m),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",null,"Windows:")," ",s),l.a.createElement("div",{className:"btn-row horizontal"},l.a.createElement("a",{href:i.webcast,className:"btn btn-webcast hvr-icon-pulse-grow",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-youtube hvr-icon"}),"Webcast"),l.a.createElement("a",{href:i.article,className:"btn btn-article hvr-icon-pulse-grow",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"far fa-newspaper hvr-icon"}),"Article"),l.a.createElement("a",{href:i.wikipedia,className:"btn btn-wikipedia hvr-icon-pulse-grow",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-wikipedia-w hvr-icon"}),"Wikipedia"))),l.a.createElement("div",{className:"right"},l.a.createElement("img",{src:i.patch.small,alt:"Patch"}))))}));var L=l.a.memo((function(e){var a=Object(m.useQuery)(k,{variables:{id:e.rocketId}}),t=a.loading,n=a.error,r=a.data;if(t)return l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("h4",{className:"loading"},"Loading Rocket Data..."),l.a.createElement("div",{className:"spinner-border ml-auto",role:"status","aria-hidden":"true"}));if(n)return console.log(n),l.a.createElement("h2",{className:"loading"},l.a.createElement("span",{role:"img","aria-label":"warn-emoji"},"\u26a0\ufe0f"),"Error Fetching Launchpad Data");var c=r.rocket,s=c.name,i=c.type,o=c.active,u=c.stages,d=c.boosters,p=c.cost_per_launch,E=c.success_rate_pct,h=c.first_flight,g=c.country,f=c.company,b=c.wikipedia,N=c.description,v=c.flickr_images;return l.a.createElement("div",{className:"card horizontal"},l.a.createElement("div",{className:"card-header horizontal"},"Rocket Info"),l.a.createElement("div",{className:"card-body horizontal"},l.a.createElement("div",{className:"left"},l.a.createElement("h5",{className:"card-title rocket-info"},s),l.a.createElement("p",{className:"rocket-desc"},N),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Type"),l.a.createElement("td",null,i)),l.a.createElement("tr",null,l.a.createElement("td",null,"Active"),l.a.createElement("td",null,o?"Yes":"No")),l.a.createElement("tr",null,l.a.createElement("td",null,"Stages"),l.a.createElement("td",null,u)),l.a.createElement("tr",null,l.a.createElement("td",null,"Boosters"),l.a.createElement("td",null,d)),l.a.createElement("tr",null,l.a.createElement("td",null,"Cost per launch"),l.a.createElement("td",null,p)),l.a.createElement("tr",null,l.a.createElement("td",null,"Success Rate (%)"),l.a.createElement("td",null,E)),l.a.createElement("tr",null,l.a.createElement("td",null,"First flight"),l.a.createElement("td",null,h)),l.a.createElement("tr",null,l.a.createElement("td",null,"Country"),l.a.createElement("td",null,g)),l.a.createElement("tr",null,l.a.createElement("td",null,"Company"),l.a.createElement("td",null,f)),l.a.createElement("tr",null,l.a.createElement("td",null,"First flight"),l.a.createElement("td",null,h)))),l.a.createElement("a",{href:b,className:"btn btn-wikipedia",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-wikipedia-w"}),"Wikipedia")),l.a.createElement("div",{className:"right rocket-img-wrapper"},v.map((function(e){return l.a.createElement("img",{src:e,alt:"Rocket",key:Math.random().toString(36).substring(7)})})))))}));var j=l.a.memo((function(e){var a=Object(m.useQuery)(y,{variables:{id:e.launchpadId}}),t=a.loading,n=a.error,r=a.data;if(t)return l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("h4",{className:"loading"},"Loading Launchpad Data..."),l.a.createElement("div",{className:"spinner-border ml-auto",role:"status","aria-hidden":"true"}));if(n)return console.log(n),l.a.createElement("h2",{className:"loading"},l.a.createElement("span",{role:"img","aria-label":"warn-emoji"},"\u26a0\ufe0f"),"Error Fetching Launchpad Data");var c=r.launchpad,s=c.name,i=c.full_name,o=c.locality,u=c.region,d=c.timezone,p=c.latitude,E=c.longitude,h=c.launch_attempts,g=c.launch_successes,f=c.details,b=c.status;return l.a.createElement("div",{className:"card horizontal"},l.a.createElement("div",{className:"card-header horizontal"},"Launchpad Info"),l.a.createElement("div",{className:"card-body horizontal"},l.a.createElement("div",{className:"left"},l.a.createElement("h5",{className:"card-title launchpad-info"},s),l.a.createElement("p",{className:"launchpad-desc"},f),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",null,"Full name:")," ",i),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",null,"Status:")," ",b),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",null,"Locality:")," ",o),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",null,"Region:")," ",u),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",null,"Timezone:")," ",d),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",null,"Latitude:")," ",p),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",null,"Longitude:")," ",E),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",null,"Launch attempts:")," ",h),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",null,"Launch successes:")," ",g)),l.a.createElement("div",{className:"right"})))}));var S=l.a.memo((function(e){var a=e.match.params.id,t=Object(m.useQuery)(_,{variables:{id:a}}),n=t.loading,r=t.error,c=t.data;if(n)return l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("h4",{className:"loading"},"Loading Launch Data..."),l.a.createElement("div",{className:"spinner-border ml-auto",role:"status","aria-hidden":"true"}));if(r)return console.log(r),l.a.createElement("h2",{className:"loading"},l.a.createElement("span",{role:"img","aria-label":"warn-emoji"},"\u26a0\ufe0f"),"Error Fetching Launchpad Data");var s=c.launch,i=s.flight_number,u=s.name,d=s.success,p=s.date_utc,E=s.date_local,h=s.date_unix,g=s.launchpad,f=s.details,b=s.rocket,N=s.window,v=s.links;return l.a.createElement("div",{className:"launch-wrapper"},l.a.createElement(x,{payload:{name:u,success:d,flight_number:i,date_utc:p,date_local:E,date_unix:h,window:N,links:v,details:f}}),l.a.createElement(L,{rocketId:b}),l.a.createElement(j,{launchpadId:g}),l.a.createElement(o.b,{to:"/",className:"btn btn-dark btn-back"},l.a.createElement("i",{className:"fas fa-home"})," Home"))})),z=new m.ApolloClient({uri:"/graphql",cache:new m.InMemoryCache});var D=function(){return l.a.createElement(m.ApolloProvider,{client:z},l.a.createElement(o.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("img",{className:"App-logo",src:i.a,alt:"SpaceX"}),l.a.createElement(u.a,{exact:!0,path:"/",component:w}),l.a.createElement(u.a,{exact:!0,path:"/launch/:id",component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.71367425.chunk.js.map