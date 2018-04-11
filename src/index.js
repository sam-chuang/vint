
const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold : 0
}

export const init = options => {
    Object.assign(defaultOptions, options)
}

export const whenExitViewport = (fn, element, options) => {
    
    var observer = new IntersectionObserver(
        applyToExitViewport(fn, element),
        Object.assign({}, defaultOptions, options)
    )

    observer.observe( element )
    return observer
}

export const onceExitViewport = (element, options) => {

    return new Promise(
        resolve => {
            const resolveOnLazy = applyToExitViewport(doResolve(resolve), element)

            new IntersectionObserver(
                resolveOnLazy,
                Object.assign({}, defaultOptions, options)
            )
            .observe( element )
        }
    ).then(data => {
        data.observer.unobserve(element)
        return data
    })
}

export const whenEnterViewport = (fn, element, options) => {

    var observer = new IntersectionObserver(
        applyToEnterViewport(fn, element),
        Object.assign({}, defaultOptions, options)
    )

    observer.observe( element )
    return observer
}

export const onceEnterViewport = (element, options) => {

    return new Promise(
        resolve => {
            const resolveOnActive = applyToEnterViewport(doResolve(resolve), element)

            new IntersectionObserver(
                resolveOnActive,
                Object.assign({}, defaultOptions, options)
            )
            .observe( element )
        }
    )
}

const doResolve = resolve => (entry, observer) => {
    resolve({
        target: entry.target,
        entry,
        observer
    })
}

const applyToExitViewport = (fn, element) => {
    return applyTo(
        entry => entry.target === element && !entry.isIntersecting,
        fn
    )
}

const applyToEnterViewport = (fn, element) => {
    return applyTo(
        entry => entry.target === element && entry.isIntersecting,
        fn
    )
}

const applyTo = (pred, apply) => (entries, observer) => {
    entries.forEach(
        entry => {
            if (pred(entry)) {
                apply(entry, observer)
            }
        }
    )
}