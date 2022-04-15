import{f as u,i as c,q as g,S as p,c as i,h,j as d,g as f,a2 as x,a1 as v,a3 as y,a4 as _,a5 as m,ae as C}from"./index.6e67c3f0.js";var $=u({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:s}){const{proxy:{$q:n}}=f(),e=c(g);c(p,()=>{console.error("QPage needs to be child of QPageContainer")});const o=i(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof t.styleFn=="function"){const l=e.isContainer.value===!0?e.containerHeight.value:n.screen.height;return t.styleFn(a,l)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":n.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":n.screen.height-a+"px"}}),r=i(()=>`q-page ${t.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:r.value,style:o.value},d(s.default))}}),P="/assets/quasar-logo-vertical.55e9c854.svg";const q=v({name:"IndexPage"}),Q=C("img",{alt:"Quasar logo",src:P,style:{width:"200px",height:"200px"}},null,-1);function B(t,s,n,e,o,r){return y(),_($,{class:"flex flex-center"},{default:m(()=>[Q]),_:1})}var H=x(q,[["render",B]]);export{H as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhQYWdlLjNjZmUzZjYyLmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3BhZ2UvUVBhZ2UuanMiLCIuLi8uLi9zcmMvYXNzZXRzL3F1YXNhci1sb2dvLXZlcnRpY2FsLnN2ZyIsIi4uLy4uL3NyYy9wYWdlcy9JbmRleFBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIGNvbXB1dGVkLCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgcGFnZUNvbnRhaW5lcktleSwgbGF5b3V0S2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVBhZ2UnLFxuXG4gIHByb3BzOiB7XG4gICAgcGFkZGluZzogQm9vbGVhbixcbiAgICBzdHlsZUZuOiBGdW5jdGlvblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgJGxheW91dCA9IGluamVjdChsYXlvdXRLZXkpXG4gICAgaW5qZWN0KHBhZ2VDb250YWluZXJLZXksICgpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FQYWdlIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFQYWdlQ29udGFpbmVyJylcbiAgICB9KVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBvZmZzZXRcbiAgICAgICAgPSAoJGxheW91dC5oZWFkZXIuc3BhY2UgPT09IHRydWUgPyAkbGF5b3V0LmhlYWRlci5zaXplIDogMClcbiAgICAgICAgKyAoJGxheW91dC5mb290ZXIuc3BhY2UgPT09IHRydWUgPyAkbGF5b3V0LmZvb3Rlci5zaXplIDogMClcblxuICAgICAgaWYgKHR5cGVvZiBwcm9wcy5zdHlsZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9ICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWVcbiAgICAgICAgICA/ICRsYXlvdXQuY29udGFpbmVySGVpZ2h0LnZhbHVlXG4gICAgICAgICAgOiAkcS5zY3JlZW4uaGVpZ2h0XG5cbiAgICAgICAgcmV0dXJuIHByb3BzLnN0eWxlRm4ob2Zmc2V0LCBoZWlnaHQpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1pbkhlaWdodDogJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgID8gKCRsYXlvdXQuY29udGFpbmVySGVpZ2h0LnZhbHVlIC0gb2Zmc2V0KSArICdweCdcbiAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgJHEuc2NyZWVuLmhlaWdodCA9PT0gMFxuICAgICAgICAgICAgICAgID8gKG9mZnNldCAhPT0gMCA/IGBjYWxjKDEwMHZoIC0gJHsgb2Zmc2V0IH1weClgIDogJzEwMHZoJylcbiAgICAgICAgICAgICAgICA6ICgkcS5zY3JlZW4uaGVpZ2h0IC0gb2Zmc2V0KSArICdweCdcbiAgICAgICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1wYWdlICR7IHByb3BzLnBhZGRpbmcgPT09IHRydWUgPyAnIHEtbGF5b3V0LXBhZGRpbmcnIDogJycgfWBcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnbWFpbicsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlXG4gICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fNTVlOWM4NTRfX1wiIiwiPHRlbXBsYXRlPlxuICA8cS1wYWdlIGNsYXNzPVwiZmxleCBmbGV4LWNlbnRlclwiPlxuICAgIDxpbWdcbiAgICAgIGFsdD1cIlF1YXNhciBsb2dvXCJcbiAgICAgIHNyYz1cIn5hc3NldHMvcXVhc2FyLWxvZ28tdmVydGljYWwuc3ZnXCJcbiAgICAgIHN0eWxlPVwid2lkdGg6IDIwMHB4OyBoZWlnaHQ6IDIwMHB4XCJcbiAgICA+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0luZGV4UGFnZSdcbn0pXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZUJsb2NrIl0sIm1hcHBpbmdzIjoib0lBTUEsR0FBQSxHQUFlLEVBQWdCLENBQzdCLEtBQU0sUUFFTixNQUFPLENBQ0wsUUFBUyxRQUNULFFBQVMsUUFDVixFQUVELE1BQU8sRUFBTyxDQUFFLFNBQVMsQ0FDdkIsS0FBTSxDQUFFLE1BQU8sQ0FBRSxPQUFTLEVBQW9CLEVBRXhDLEVBQVUsRUFBTyxDQUFTLEVBQ2hDLEVBQU8sRUFBa0IsSUFBTSxDQUM3QixRQUFRLE1BQU0sMkNBQTJDLENBQy9ELENBQUssRUFFRCxLQUFNLEdBQVEsRUFBUyxJQUFNLENBQzNCLEtBQU0sR0FDRCxHQUFRLE9BQU8sUUFBVSxHQUFPLEVBQVEsT0FBTyxLQUFPLEdBQ3RELEdBQVEsT0FBTyxRQUFVLEdBQU8sRUFBUSxPQUFPLEtBQU8sR0FFM0QsR0FBSSxNQUFPLEdBQU0sU0FBWSxXQUFZLENBQ3ZDLEtBQU0sR0FBUyxFQUFRLFlBQVksUUFBVSxHQUN6QyxFQUFRLGdCQUFnQixNQUN4QixFQUFHLE9BQU8sT0FFZCxNQUFPLEdBQU0sUUFBUSxFQUFRLENBQU0sQ0FDcEMsQ0FFRCxNQUFPLENBQ0wsVUFBVyxFQUFRLFlBQVksUUFBVSxHQUNwQyxFQUFRLGdCQUFnQixNQUFRLEVBQVUsS0FFekMsRUFBRyxPQUFPLFNBQVcsRUFDaEIsSUFBVyxFQUFJLGdCQUFpQixPQUFlLFFBQy9DLEVBQUcsT0FBTyxPQUFTLEVBQVUsSUFFekMsQ0FDUCxDQUFLLEVBRUssRUFBVSxFQUFTLElBQ3ZCLFVBQVcsRUFBTSxVQUFZLEdBQU8sb0JBQXNCLElBQzNELEVBRUQsTUFBTyxJQUFNLEVBQUUsT0FBUSxDQUNyQixNQUFPLEVBQVEsTUFDZixNQUFPLEVBQU0sS0FDbkIsRUFBTyxFQUFNLEVBQU0sT0FBTyxDQUFDLENBQ3hCLENBQ0gsQ0FBQyxFQ3ZEYyxFQUFBLDRDQ2FmLEtBQUssR0FBYSxFQUFhLENBQzdCLEtBQU0sV0FDUixDQUFDLElBYkdBLEVBSUMsTUFBQSxDQUhDLElBQUksY0FDSixJQUFBLEVBQ0EsTUFBQSxDQUFtQyxNQUFBLFFBQUEsT0FBQSxPQUFBLCtDQUp2Q0MsRUFNUyxFQUFBLENBQUEsTUFBQSxvQkFOdUIsV0FDOUIsSUFJQyxDQUpEIn0=
