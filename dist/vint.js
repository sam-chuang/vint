(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.vint = global.vint || {})));
}(this, (function (exports) { 'use strict';

    var defaultOptions = {
        root: null,
        rootMargin: '0px',
        threshold : 0
    };

    var init = function (options) {
        Object.assign(defaultOptions, options);
    };

    var whenExitViewport = function (fn, element, options) {
        
        var observer = new IntersectionObserver(
            applyToExitViewport(fn, element),
            Object.assign({}, defaultOptions, options)
        );

        observer.observe( element );
        return observer
    };

    var onceExitViewport = function (element, options) {

        return new Promise(
            function (resolve) {
                var resolveOnLazy = applyToExitViewport(doResolve(resolve), element);

                new IntersectionObserver(
                    resolveOnLazy,
                    Object.assign({}, defaultOptions, options)
                )
                .observe( element );
            }
        ).then(function (data) {
            data.observer.unobserve(element);
            return data
        })
    };

    var whenEnterViewport = function (fn, element, options) {

        var observer = new IntersectionObserver(
            applyToEnterViewport(fn, element),
            Object.assign({}, defaultOptions, options)
        );

        observer.observe( element );
        return observer
    };

    var onceEnterViewport = function (element, options) {

        return new Promise(
            function (resolve) {
                var resolveOnActive = applyToEnterViewport(doResolve(resolve), element);

                new IntersectionObserver(
                    resolveOnActive,
                    Object.assign({}, defaultOptions, options)
                )
                .observe( element );
            }
        )
    };

    var doResolve = function (resolve) { return function (entry, observer) {
        resolve({
            target: entry.target,
            entry: entry,
            observer: observer
        });
    }; };

    var applyToExitViewport = function (fn, element) {
        return applyTo(
            function (entry) { return entry.target === element && !entry.isIntersecting; },
            fn
        )
    };

    var applyToEnterViewport = function (fn, element) {
        return applyTo(
            function (entry) { return entry.target === element && entry.isIntersecting; },
            fn
        )
    };

    var applyTo = function (pred, apply) { return function (entries, observer) {
        entries.forEach(
            function (entry) {
                if (pred(entry)) {
                    apply(entry, observer);
                }
            }
        );
    }; };

    exports.init = init;
    exports.whenExitViewport = whenExitViewport;
    exports.onceExitViewport = onceExitViewport;
    exports.whenEnterViewport = whenEnterViewport;
    exports.onceEnterViewport = onceEnterViewport;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmludC5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIHJvb3Q6IG51bGwsXHJcbiAgICByb290TWFyZ2luOiAnMHB4JyxcclxuICAgIHRocmVzaG9sZCA6IDBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXQgPSBvcHRpb25zID0+IHtcclxuICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB3aGVuRXhpdFZpZXdwb3J0ID0gKGZuLCBlbGVtZW50LCBvcHRpb25zKSA9PiB7XHJcbiAgICBcclxuICAgIHZhciBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAgICAgICBhcHBseVRvRXhpdFZpZXdwb3J0KGZuLCBlbGVtZW50KSxcclxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcclxuICAgIClcclxuXHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKCBlbGVtZW50IClcclxuICAgIHJldHVybiBvYnNlcnZlclxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgb25jZUV4aXRWaWV3cG9ydCA9IChlbGVtZW50LCBvcHRpb25zKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAgIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNvbHZlT25MYXp5ID0gYXBwbHlUb0V4aXRWaWV3cG9ydChkb1Jlc29sdmUocmVzb2x2ZSksIGVsZW1lbnQpXHJcblxyXG4gICAgICAgICAgICBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlT25MYXp5LFxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLm9ic2VydmUoIGVsZW1lbnQgKVxyXG4gICAgICAgIH1cclxuICAgICkudGhlbihkYXRhID0+IHtcclxuICAgICAgICBkYXRhLm9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxyXG4gICAgICAgIHJldHVybiBkYXRhXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgd2hlbkVudGVyVmlld3BvcnQgPSAoZm4sIGVsZW1lbnQsIG9wdGlvbnMpID0+IHtcclxuXHJcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgICAgICAgYXBwbHlUb0VudGVyVmlld3BvcnQoZm4sIGVsZW1lbnQpLFxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxyXG4gICAgKVxyXG5cclxuICAgIG9ic2VydmVyLm9ic2VydmUoIGVsZW1lbnQgKVxyXG4gICAgcmV0dXJuIG9ic2VydmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvbmNlRW50ZXJWaWV3cG9ydCA9IChlbGVtZW50LCBvcHRpb25zKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAgIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNvbHZlT25BY3RpdmUgPSBhcHBseVRvRW50ZXJWaWV3cG9ydChkb1Jlc29sdmUocmVzb2x2ZSksIGVsZW1lbnQpXHJcblxyXG4gICAgICAgICAgICBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlT25BY3RpdmUsXHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAub2JzZXJ2ZSggZWxlbWVudCApXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBkb1Jlc29sdmUgPSByZXNvbHZlID0+IChlbnRyeSwgb2JzZXJ2ZXIpID0+IHtcclxuICAgIHJlc29sdmUoe1xyXG4gICAgICAgIHRhcmdldDogZW50cnkudGFyZ2V0LFxyXG4gICAgICAgIGVudHJ5LFxyXG4gICAgICAgIG9ic2VydmVyXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBhcHBseVRvRXhpdFZpZXdwb3J0ID0gKGZuLCBlbGVtZW50KSA9PiB7XHJcbiAgICByZXR1cm4gYXBwbHlUbyhcclxuICAgICAgICBlbnRyeSA9PiBlbnRyeS50YXJnZXQgPT09IGVsZW1lbnQgJiYgIWVudHJ5LmlzSW50ZXJzZWN0aW5nLFxyXG4gICAgICAgIGZuXHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGFwcGx5VG9FbnRlclZpZXdwb3J0ID0gKGZuLCBlbGVtZW50KSA9PiB7XHJcbiAgICByZXR1cm4gYXBwbHlUbyhcclxuICAgICAgICBlbnRyeSA9PiBlbnRyeS50YXJnZXQgPT09IGVsZW1lbnQgJiYgZW50cnkuaXNJbnRlcnNlY3RpbmcsXHJcbiAgICAgICAgZm5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgYXBwbHlUbyA9IChwcmVkLCBhcHBseSkgPT4gKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goXHJcbiAgICAgICAgZW50cnkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJlZChlbnRyeSkpIHtcclxuICAgICAgICAgICAgICAgIGFwcGx5KGVudHJ5LCBvYnNlcnZlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJjb25zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQ0FBLElBQU0sY0FBYyxHQUFHO1FBQ25CLElBQUksRUFBRSxJQUFJO1FBQ1YsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxHQUFHLENBQUM7TUFDaEI7O0FBRUQsQUFBWSxRQUFDLElB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
