const svg = d3.select('svg');
const arc = d3.arc();

const height = +svg.attr('height');
const width = +svg.attr('width');

const g = svg.append('g').attr('transform', `translate(${width / 2}, ${height / 2})`);

const eyeSpacing = 100;
const eyeYoffset = -70;
const eyeRadius = 20;
const eyebrowWidth = 50;
const eyebrowHeight = 20;

const eyesGroup = g.append('g').attr('transform', `translate(0, ${eyeYoffset})`);

const circle = g
	.append('circle')
	.attr('r', height / 2)
	.attr('fill', 'yellow')
	.attr('stroke', 'black');

const leftEye = g.append('circle').attr('r', eyeRadius).attr('cx', -eyeSpacing).attr('cy', eyeYoffset);

const rightEye = g.append('circle').attr('r', eyeRadius).attr('cx', eyeSpacing).attr('cy', eyeYoffset);

const leftEyebrow = g
	.append('rect')
	.attr('width', eyebrowWidth)
	.attr('height', eyebrowHeight)
	.attr('y', eyeYoffset - 50)
	.attr('x', eyeSpacing - 25)
	.transition()
	.duration(2000)
    .attr('y', eyeYoffset - 80)
    .transition()
	.duration(2000)
	.attr('y', eyeYoffset - 50);

const rightEyebrow = g
	.append('rect')
	.attr('width', eyebrowWidth)
	.attr('height', eyebrowHeight)
	.attr('y', eyeYoffset - 50)
	.attr('x', -eyeSpacing - 25)
	.transition()
	.duration(2000)
	.attr('y', eyeYoffset - 80)
    .transition()
	.duration(2000)
	.attr('y', eyeYoffset - 50)
const mouth = g.append('path').attr(
	'd',
	d3
		.arc()
		.innerRadius(150)
		.outerRadius(170)
		.startAngle(Math.PI / 2)
		.endAngle((Math.PI * 3) / 2)
);
