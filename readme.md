#accordion.js | [demo](http://btn0s.github.io/accordion.js/)

#### a lightweight, multi-tier dropdown 'accordion' menu

## Basic Structure
any number of top-level sections can be added, and any number of sub-tiers inside those...  and inside those (and so on).

```
<div id="closer">
	<div class="row">
		<div class="columns">
			<div class="menu">
				<div class="title">
					<a href="#" class="toggle">
						<h1></h1>
					</a>
				</div>
				<ul class="content">
					<li>
						<a href="#" class="toggle"></a>
						<ul>
							<li>
								<p></p>
							</li>
						</ul>
					</li>
					<li>
						<a href="#" class="toggle"></a>
						<ul>
							<li><a href="#"></a></li>
							<li><a href="#"></a></li>
							<li><a href="#"></a></li>
						</ul>
					</li>
					<li>
						<a href="#" class="toggle"></a>
						<ul>
							<li><p></p></li>
							<li>
								<a href="#" class="toggle"></a>
								<ul>
									<li></li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
```
