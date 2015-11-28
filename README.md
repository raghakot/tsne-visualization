# T-SNE Visualizer
Uses <a href="https://github.com/karpathy/tsnejs">tSNEJS</a> from kaparthy to compute lower dimensional embeddings and visualize locally on your own data sets.

## Configuration
config.json defines all the parameters, including the data set to use. Parameters are:
- **epsilon** The learning rate for t-sne.
- **perplexity** The number of neightbours to consider. Smaller values tend to give more fine grained clusters.
- **embedWindowX** The width of render area.
- **embedWindowY** The height of render area.
- **thumbImgSize** The image thumbnail size.
- **data** The path to json that defines the data. The json should contain labels, (optional) images and weights. See data/data.json for an example.
- **limit** Sometimes the FPS is pretty bad for large data sets. This setting lets you limit the number of rows that should be considered for the visualization.
- **showLabels**: (true/false) to (Enable/Disable) labels during rendering.
- **showImages**: (true/false) to (Enable/Disable) images during rendering.
- **spreadFactor**: Defines how spread out the data is. Depending on how small/large t he weight vectors are, the computed (x, y) values copuld end up being too clumped together. Think of this as an overall zoom factor to make your data look good. Try experimenting with values that are a factor of 10.
- **enable3D**: Embeds data in 3D space when set to true, 2D otherwise.

## Running locally
Setup config.json to point to the data. See provided data/data.json for examples. Launch a local python server using. For MacOS, rename 'gnome-open' to 'open' within run.sh
```sh
$ ./run.sh
```

## Todo
- Offload computation to web workers and only perform rendering on the main thread.
- Merge label and image sprites
- Fix label rendering
- Color lables uniquely per cluster
