# T-SNE Visualizer
Uses <a href="https://github.com/karpathy/tsnejs">tSNEJS</a> from kaparthy to compute lower dimensional embeddings and visualize locally on your own data sets.

## Configuration
config.json defines all the parameters, including the data set to use. Parameters are:

These options control the t-sne algorithm.
- **epsilon** The learning rate for t-sne.
- **perplexity** The number of neightbours to consider. Smaller values tend to give more fine grained clusters.

These options control the rendering
- **embedWindowX** The width of render area.
- **embedWindowY** The height of render area.
- **enable3D**: Embeds data in 3D space when set to true, 2D otherwise.

These options are usually tweaked together. Larger image sizes will require greater cameraZ. 
- **objectSize** The object size.
- **cameraZ** The initial camera position on z-axis
- **spreadFactor**: Defines how spread out the data is. Depending on how small/large t he weight vectors are, the computed (x, y) values copuld end up being too clumped together. Think of this as an overall zoom factor to make your data look good. Try experimenting with values that are a factor of 10.

These options are used to provide data.
- **data** The path to json that defines the data. The json should contain labels, (optional) images and weights. See data/data.json for an example.
- **limit** Sometimes the frame rate is pretty bad for large data sets. This setting lets you limit the number of rows that should be considered for the visualization.

## Running locally
Setup config.json to point to the data. See provided data/data.json for examples. Launch a local python server using. For MacOS, rename 'gnome-open' to 'open' within run.sh
```sh
$ ./run.sh
```

## Todo
- Offload computation to web workers and only perform rendering on the main thread.
- Auto detect spread factor. Multiply by a factor of 10 for the lowest x, y, z to make it > 1.