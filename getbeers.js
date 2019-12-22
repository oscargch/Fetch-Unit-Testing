      // API from: https://punkapi.com/documentation/v2
      // window.onload = function() {
      //   getBeersTwo(10);
      // }

      // function getBeers(id) {
      //   return fetch('https://api.punkapi.com/v2/beers/' + id)
      //   .then(response => response.json())
      //   .then(data => data.results[0])
      // }

      // let beers;

      // function getBeersTwo(id) {
      //   fetch('https://api.punkapi.com/v2/beers/' + id)
      //     .then(response => response.json())
      //     .then(data => beers = data)
      // }
const assert = require('assert')

      function getBeersThree(fetch, id) {
        return fetch('https://api.punkapi.com/v2/beers/' + id)
          .then(response => response.json())
          .then(data => beers = data)
      }    

      describe('getBeersThree', () => {
        it('works for one beer', () => {
          const fakeFetch = url => {
            assert(
              url ===
              'https://api.punkapi.com/v2/beers/1'
            )
            return new Promise(function(resolve){
               
            })
          }
          getBeersThree(fakeFetch, 1)
        })
      })

      describe('getBeersThree', () => {
        it('works for ten beers', () => {
          const fakeFetch = url => {
            assert(
              url ===
              'https://api.punkapi.com/v2/beers/10'
            )
            return new Promise(function(resolve){
               
            })
          }
          getBeersThree(fakeFetch, 10)
        })
      })