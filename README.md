This visualizer uses <a href="https://github.com/karpathy/tsnejs">tSNEJS</a> from kaparthy to compute lower dimensional embeddings. 

## Setup
config.json defines all the parameters, including the data set to use. Parameters are:
**stepsBeforeUpdate** The number of t-sne optimization steps to run before rendering. <br />
**epsilon** The learning rate for t-sne. <br />
**perplexity** The number of neightbours to consider. Smaller values tend to give more fine grained clusters. <br />
**embedWindowX** The width of render area. <br />
**embedWindowY** The height of render area. <br />
**thumbImgSize** The image thumbnail size. <br />
**hoverImgSize** The (zoomed) hover size for the images. <br />
**data** The path to json that defines the data. The json should contain labels, (optional) images and weights. See data/data.json for an example. <br />
**limit** Sometimes the FPS is pretty bad for large data sets. This setting lets you limit the number of rows that should be considered for the visualization. <br />
**showLabels** (true/false) to (Enable/Disable) labels during rendering. <br />
**showImages** (true/false) to (Enable/Disable) images during rendering. <br />
**spreadFactor** Defines how spread out the data is. Depending on how small/large t he weight vectors are, the computed (x, y) values copuld end up being too clumped together. Think of this as an overall zoom factor to make your data look good. Try experimenting with values that are a factor of 10. <br />

Run ./run.sh to launch
