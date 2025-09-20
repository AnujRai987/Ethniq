import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Colors } from '../../../assets/Colors';
// Placeholder for icons - you can replace with react-native-vector-icons or react-native-svg icons
const Icon = ({name, size = 24, color = Colors.bttn2}) => {
  // For simplicity, just render a colored square as icon placeholder
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: size / 6,
      }}
    />
  );
};
const ArtisanPost = ({
  profileImage,
  name,
  username,
  postImage,
  description,
  likes,
  comments,
  shares,
}) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.profileRow}>
        <Image source={{uri: profileImage}} style={styles.profileImage} />
        <View style={{flex: 1, marginLeft: 10}}>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.profileUsername}>{username}</Text>
        </View>
      </View>
      <View style={styles.postImageContainer}>
        <Image source={{uri: postImage}} style={styles.postImage} />
      </View>
      <Text style={styles.postDescription}>{description}</Text>
      <View style={styles.interactionRow}>
        <View style={styles.interactionItem}>
          <Icon name="heart" />
          <Text style={styles.interactionText}>{likes}</Text>
        </View>
        <View style={styles.interactionItem}>
          <Icon name="chat" />
          <Text style={styles.interactionText}>{comments}</Text>
        </View>
        <View style={styles.interactionItem}>
          <Icon name="share" />
          <Text style={styles.interactionText}>{shares}</Text>
          </View>
        </View>
    </View>
         ) };
export default function EthniqApp() {
    return (
        <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
            <TouchableOpacity style={styles.iconButton}>
            <Icon name="menu" size={24} color="#111811" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>ETHNIQ</Text>
            <TouchableOpacity style={styles.iconButton}>
            <Icon name="search" size={24} color="#111811" />
            </TouchableOpacity>
        </View>
      {/* Scrollable content */}
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        {/* Posts */}
        <ArtisanPost
          profileImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBfuAEEUXXCCVfSF24ubiElWo86T7lMsuKhv-EC_ot0luprv609gi1fa7PXV-xa9JgC0EgSTO5eS9sFRJqgWhsY4qEoVJtNhxjCr6m0QxZVLCk7sVcQWMWJvambN5SxeSIY3q8SB13eweAOQZFqPr6UG4WkvRjveYgdBYn-kcW7Cp3VTxShLUaa6D6pC04PTR3tOKzNfIfQPA4kVhiuPODzM8V79Cti-hPBE39yHgGAYlRQil6mWycgDxwf63K1DWVMLawid46rM1w"
          name="Artisan Logo"
          username="@crafty_hands"
          postImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAVLaNkws4d7kkAgEyADcBaEa6J91Kk1s4HxwxQNH-gfj4LVqJVJIJgzt5LB8gHqUcDnkpokukvbnYTaO0PlysxhsKNz5G1uL7FuwHNPM9MydMMOdoFRXVUlHY0jUTFWlJ4ig2GD1jEAws1l5zBC-t5wGsZFKHTEt1xO_ZqfW0Az3zzI4is4lezz8zfc5vuTH80EqA2LpQO_oi5X1EK1tLm9rGVvkEVKcTjx_wfc3NSt1ERbKYZFjeUG7j8t0hFpAxbPUukVcJaOH8"
          description="Discover the beauty of handcrafted pottery, each piece telling a unique story. #artisan #pottery #craft"
          likes={123}
          comments={45}
          shares={67}
           />
        <ArtisanPost
          profileImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCMd1wj-FUJRXt7LS8tZCnauTzbW3HNnZbOb_aSLYiZ3_14ABhrcR2h8BXThgt9CAr6b7gsXzuIfLpO5cLMIljW-Uo2SgSpF182G-p_50lSET9cG12i5EGjT-nIb73zwlaIh2syQFwXh6hyH9bv1Bv3ZqzGBr4xOtDiiNf6LTY1CNyobji8d57DKx9nPT2fvSbTDLaJY3fyH8UzXWn0fo-7r-XJaOrAvX7Hw67SER5jFd8BqKCnyNT0txZEsIUmEeRycmikwYzNDPA"
          name="Artisan Logo"
          username="@artisan_designs"
          postImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCDE3zbtq9jCeDon8d-rV9prCGUNv66nLKiM-_s3mKi2q3Lx043_N-RrfqOhg5vv0eBJXwIj-lBhaG7zTUbSZt7RtO8hoJ4llmp-2i65_rF0ZpLP1WssHvcG5xV2fM9qqPQl5fihbeIMmo_AUiZf6Qdul7myEhqcjuzJVBd4XLezgghqqvZp1WESGd1CrIbyUGyD8cfSixBzqqR0kTacTAbKCuvZoF0qJvWak94_9htQZJPZ82JUT7THVzpPPg5ztpcMSU_cmzLuh0"
          description="Intricate handwoven textiles, blending traditional techniques with modern designs. #textiles #handwoven #artisan"
          likes={234}
          comments={56}
          shares={78}
        />
        <ArtisanPost
          profileImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAne1-snfYZYVsrxOGwDiIbzVH_OVZiLjBum-oyedA7ZkK1YR-IsvWiTx4Ch7ni41DIdfBaN52hL8yURTtRKHRaIXKM_u6npgscvFP82xHXid7KzWxuHskflmqndrIlXfmW1g8H6FY_9EEXai9TMbAvZOf42srnH_rmnkf4kWRhZ0eTo1QfK6V9uP1PJTq3x0UKXtmKk2uq8rtbggdx9OvkLiMt9hMZMmd_dGiCZt8-zo_feVN8aODuJoJh9HB81NTLKGQBhQWVpBk"
          name="Artisan Logo"
          username="@creative_crafts"
          postImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBYMw6erwr1M3KsHdiokERXgwr1V2a3vUZpfMOttJixyXdhUCEmoPCVbdcLVRPvmT7KcLA_G86HsftCWSb8Z92LQ1qdRKjJlXA5RREjmp8vqnaKpzJHJuHHewaGf9Dz4bQCGobw4Ow2a5sD68gL-6dmjzhGVHwoAIk1Gq9tdUyr7AFGYNnfg9ePsi59xt1P8Tx1IQ3HwnVg0530xB1jLbU7RONOQjoiPu5gw63EwAP_wF2KrvAtC5kKPVKGAvcDahA8b-2fQq8jT9E"
          description="Exquisite hand-painted ceramic vases, adding a touch of elegance to any space. #ceramics #handpainted #artisan"
          likes={345}
          comments={67}
          shares={89}
        />
        {/* Visual Preview Button */}
        <View style={styles.visualPreviewContainer}>
          <TouchableOpacity style={styles.visualPreviewButton}>
            <Text style={styles.visualPreviewText}>Visual Preview</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" color="#111811" />
          <Text style={[styles.navText, {color: '#111811'}]}>Home</Text>
        </TouchableOpacity>
<TouchableOpacity style={styles.navItem}>
          <Icon name="film" />
          <Text style={styles.navText}>Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="plus" />
          <Text style={styles.navText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="user" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    fontFamily: 'Be Vietnam Pro, Noto Sans, sans-serif', // Note: React Native doesn't support web fonts directly
  },
  header: {
    marginTop:25,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomColor: '#f0f4f0',
    borderBottomWidth: 1,
  },
  iconButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111811',
    flex: 1,
    textAlign: 'center',
  },
  postContainer: {
    marginHorizontal: 16,
    marginVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#eee',
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111811',
  },
  profileUsername: {
    fontSize: 14,
    color: '#618961',
  },
  postImageContainer: {
    width: '100%',
    aspectRatio: 3 / 2,
    backgroundColor: '#ddd',
  },
postImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  postDescription: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    color: '#111811',
  },
  interactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderTopColor: '#f0f4f0',
    borderTopWidth: 1,
  },
  interactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  interactionText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#618961',
  },
  visualPreviewContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  visualPreviewButton: {
    backgroundColor: '#618961',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  visualPreviewText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    borderTopColor: '#f0f4f0',
    borderTopWidth: 1,
    backgroundColor: '#fff',
    paddingVertical: 8,
    justifyContent: 'space-around',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#618961',
    marginTop: 2,
  },
});
