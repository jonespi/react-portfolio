import React from 'react'

export default function More() {
    return (
    <> 
        <div class="more-podcasts">
                <h3>Podcasts</h3>
                <p>In my spare time, I like to listen to podcasts and here are a few of my current favorites:</p>
                <ul class="podcasts-list">
                    <li><a class="podcast" href="https://overcast.fm/itunes730254722/jalen-jacoby"><img src="images/jandj.jpg" alt="Jalen and Jacoby Podcast" /></a></li>
                    <li><a class="podcast" href="https://overcast.fm/itunes1159170164/waypoint-radio"><img src="images/waypoint.jpg" alt="Waypoint Radio" /></a></li>
                    <li><a class="podcast" href="https://overcast.fm/itunes1324606666/keep-it"><img src="images/keepit.jpeg" alt="Keep It" /></a></li>
                </ul>
        </div>
    </>
    )
}