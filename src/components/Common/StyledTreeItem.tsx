import React from 'react';
import { Grid, IconButton, styled } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddIcon from '@mui/icons-material/Add';
import { TreeItem, treeItemClasses } from '@mui/lab';
import DeleteIconSVG from '../CustomIcons/DeleteIcon';

type StyledTreeItemProps = {
  rootNode?: boolean;
};

const StyledTreeItem = styled(TreeItem)<StyledTreeItemProps>(({ rootNode }) => {
  const borderColor = 'gray';

  return {
    position: 'relative',
    backgroundColor: '#ffff',
    '&:before': {
      pointerEvents: 'none',
      content: '""',
      position: 'absolute',
      width: 32,
      left: -16,
      top: 12,

      borderBottom:
        // only display if the TreeItem is not root node
        !rootNode ? `1px solid ${borderColor}` : 'none',
    },
    [`& .${treeItemClasses.selected}`]: {
      backgroundColor: '#ffffff',
      padding: '0 !important',
    },

    [`& .${treeItemClasses.group}`]: {
      marginLeft: 24,
      paddingLeft: 18,
      borderLeft: `1px solid ${borderColor}`,
    },
  };
});

interface Category {
  name: string;
  subcategories: Category[];
}

interface IProps {
  category: Category;
  isOnboarding?: boolean;
}

const RenderTreeItems = ({ category, isOnboarding = true }: IProps) => {
  return (
    <>
      <Grid container justifyContent="space-between" className=" w-full">
        <Grid item xs={12}>
          <Grid item container>
            <Grid item xs={10} container spacing={1}>
              <Grid item>
                <StyledTreeItem
                  nodeId={category.name}
                  label={category.name}
                  rootNode
                >
                  {category.subcategories.map((subcategory) => (
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <StyledTreeItem
                          nodeId={subcategory.name}
                          label={subcategory.name}
                        />
                      </Grid>
                      <Grid item>
                        {isOnboarding ? (
                          <IconButton className="p-0 shadow">
                            <CancelOutlinedIcon className="text-sm " />
                          </IconButton>
                        ) : (
                          <IconButton
                            disableRipple={true}
                            sx={{
                              color: 'rgb(0,0,0,0)',
                              width: '30px',
                              height: '30px',
                              //   display: 'flex',
                              //   justifyContent: 'center',
                              //   alignItems: 'center',
                              '&:hover': {
                                bgcolor: 'rgba(0, 0, 0, 0.04)',
                              },
                            }}
                          >
                            <DeleteIconSVG />
                          </IconButton>
                        )}
                      </Grid>
                    </Grid>
                  ))}
                </StyledTreeItem>
              </Grid>
              <Grid item>
                <IconButton className="p-0 shadow">
                  <AddIcon color="secondary" className="text-sm " />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item>
              {isOnboarding ? (
                <IconButton className="p-0 shadow">
                  <CancelOutlinedIcon className="text-sm " />
                </IconButton>
              ) : (
                <IconButton
                  disableRipple={true}
                  sx={{
                    color: 'rgb(0,0,0,0)',
                    width: '30px',
                    height: '30px',
                    //   display: 'flex',
                    //   justifyContent: 'center',
                    //   alignItems: 'center',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  <DeleteIconSVG />
                </IconButton>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid container justifyContent="space-between">
        <Grid item xs={10}>
          <StyledTreeItem nodeId={category.name} label={category.name} rootNode>
            {category.subcategories.map((subcategory) => (
              <Grid container justifyContent="space-between">
                <Grid item>
                  <StyledTreeItem
                    nodeId={subcategory.name}
                    label={subcategory.name}
                  />
                </Grid>
                <Grid item>
                  <IconButton className="p-0 shadow">
                    <AddIcon color="secondary" className="text-sm " />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </StyledTreeItem>
        </Grid>

        <Grid item xs={1}>
          {!isOnboarding ? (
            <IconButton className="p-0 shadow">
              <CancelOutlinedIcon color="secondary" className="text-sm " />
            </IconButton>
          ) : (
            <IconButton
              disableRipple={true}
              sx={{
                color: 'rgb(0,0,0,0)',
                width: '30px',
                height: '30px',
                //   display: 'flex',
                //   justifyContent: 'center',
                //   alignItems: 'center',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <DeleteIconSVG />
            </IconButton>
          )}
        </Grid>
      </Grid> */}
    </>
  );
};
export default RenderTreeItems;
