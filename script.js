document.addEventListener('DOMContentLoaded', () => {
    // ===== Logger Utility for AI & Debugging =====
    const headers = lines[0].split('\t').map(h => h.trim());
            if (headers.length === 0 || logger = {
        info: (context, message, data = {}) => {
            console.groupCollapsed(`ℹ️ [INFO] [${context}] ${message}`);
            console.log('Timestamp:', new Date().toISOString headers.every(h => !h)) {
                logger.error('TSV Parser', 'Validation failed:());
            if (Object.keys(data).length) console.log('Data:', data);
            console No valid headers found');
                return [];
            }

            const data = [];
            for (let i.groupEnd();
        },
        success: (context, message, data = {}) => {
            console = 1; i < lines.length; i++) {
                const values = lines[i].split('\.log(`✅ [SUCCESS] [${context}] ${message}`, data);
        },
        warn: (t');
                if (values.length > headers.length * 2) {
                    continue;
                }
                const row = {};
                headers.forEach((header, index) => {
                    row[headercontext, message, data = {}) => {
            console.warn(`⚠️ [WARN] [${context}] ${] = values[index] || '';
                });
                data.push(row);
            }
            return data;
        },

        async fetchSheet(sheetKey, retryCount = 0) {
            const sheet = TSV_SHEETS[sheetKey];
            if (!sheet) throw new Error(`Unknown sheetmessage}`, data);
        },
        error: (context, message, error = null) => {
            : ${sheetKey}`);

            try {
                const response = await fetch(sheet.url + '&cachebustconsole.group(`❌ [ERROR] [${context}] ${message}`);
            console.error('Timestamp:', new Date().toISOString());
            if (error) {
                console.error('Message:', error.message);
                console.error('Stack:', error.stack);
                if (error.user) console.error('Associated User Context:', error.user);
            }
            console.groupEnd();
        }
    };

    // Force scroll to top on refresh
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }

    // ===== Apps Script URL (for WRITE operations only) =====
    const SCRIPT_URL = 'https://=' + Date.now());
                if (!response.ok) throw new Error(`HTTP ${response.status}`);script.google.com/macros/s/AKfycbx2A8eK6bbH73380G0qW2WJH9RKBAxvqlGIAJf8k35iwBKtW3X0cZo4FRW4ag4OmzVG/exec';

    // ===== TSV Data Sources (for FAST READ operations) =====
    const TSV_BASE_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTl1nnZ64l
                const text = await response.text();
                if (!text || text.trim() === '') throw newU36_IvLrFdN0JVLkn9X1hpP_g_IQK7i Error('Empty response body');
                const parsed = this.parse(text);
                if (parsed === null || parsed === undefined) throw new Error('Parser returned null/undefined');
                return parsed;
            } catch34YmsuMg_DFYw6Uhf9Ru420VE8nwp0JL (error) {
                if (retryCount < 2) {
                    await new Promise(resolve => setTimeout(resolve, 1000 * (retryCount + 1)));
                    return this.fetchSheet(sheetKey, retryCount + 1);
                }
                logger.error('TSV Fetch', `Failed to fetch ${sheetKey}`, error);
                throw new Error(`Failed to fetch ${sheetKey}: ${error.message}`);
            }
        }
    };

    const getColumn = (row, ...keys) =>AsWr6Y/pub';
    const TSV_SHEETS = {
        accounts: { gid: {
        for (const key of keys) {
            if (row[key] !== undefined && row[key] !== '') return row[key];
            const foundKey = Object.keys(row).find(k => k.trim().toLowerCase() === key.toLowerCase());
            if (foundKey) return row[foundKey 0, url: `${TSV_BASE_URL}?gid=0&single=true&output=tsv` },
        posts: { gid: 1260057010, url: `${TSV_BASE_URL}?gid=1260057010&single=true&output=tsv` },
        comments: { gid: 1288301970, url: `${TSV_BASE_URL}?gid=1288301970&single=true&output=tsv` },
        likes: { gid: 2005421782, url: `${TSV_BASE_URL}?gid=2005421782&single=true&output=tsv` },
        followers: { gid: 196890202, url: `${TSV_BASE_URL}?gid=1968902];
        }
        return undefined;
    };

    // ===== Data Aggregation =====
    const dataAggregator = {
        async getConversationHistory({ userId, otherUserId }) {
            try {
                const02&single=true&output=tsv` },
        messages: { gid: 1861 [messagesData, accounts] = await Promise.all([
                    tsvParser.fetchSheet('messages'),
                    161898, url: `${TSV_BASE_URL}?gid=1861161898&single=true&output=tsv` },
        notifications: { gid: 1tsvParser.fetchSheet('accounts')
                ]);
                const messages = [];
                const currentUserId = userId;
                const userMap = {};
                accounts.forEach(row => userMap[row['userID'] || row['userId']] = row);

                messagesData.forEach(row => {
                    const msgId = row['messageID'] || row['652933657, url: `${TSV_BASE_URL}?gid=1652933657&single=true&output=tsv` },
        blocks: { gidmessageId'];
                    const senderId = row['senderID'] || row['senderId'];
                    const recipientId = row['recipientID'] || row['recipientId'];
                    const encodedContent = row['messageContent'];: 1228482897, url: `${TSV_BASE_URL}?gid
                    const timestamp = row['timestamp'];
                    const isRead = row['isRead'];

                    if ((=1228482897&single=true&output=tsv` },
        banssenderId === currentUserId && recipientId === otherUserId) || (senderId === otherUserId && recipientId === currentUserId)) {
                        let decodedMessage = '';
                        try { decodedMessage = atob(encodedContent); } catch (e) { decodedMessage = 'Could not decode message.'; }
                        messages.push({
                            message: { gid: 1624591656, url: `${TSV_BASE_Id: msgId, senderId: senderId, senderName: userMap[senderId]?.displayName || 'Unknown',
                            messageContent: decodedMessage, timestamp: timestamp, isRead: isRead, status: 'sent'URL}?gid=1624591656&single=true&output=tsv` },
        servInfo: { gid: 138253995, url: `${TSV
                        });
                    }
                });
                messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
                return { messages };
            } catch (error) {
                logger.error('Data Aggregator', 'Error in getConversationHistory', error);
                throw error;
            }
        },
        async getPosts(params) {
            try {
                const currentUserId = params.userId || params;
                const [
                    servInfo, bans, blocks, accounts, posts_BASE_URL}?gid=138253995&single=true&output=tsvData,
                    comments, likes, followers, messages, groupLastRead, photoLibrary
                ] = await Promise.all([
                    tsvParser.fetchSheet('servInfo'), tsvParser.fetchSheet('bans'), t` },
        filter: { gid: 316069085, url: `${TSsvParser.fetchSheet('blocks'),
                    tsvParser.fetchSheet('accounts'), tsvParser.fetchSheetV_BASE_URL}?gid=316069085&single=true&output=('posts'), tsvParser.fetchSheet('comments'),
                    tsvParser.fetchSheet('likes'), tsvtsv` },
        reports: { gid: 1234625074, url: `${TSV_BASE_URL}?gid=1234625074&single=trueParser.fetchSheet('followers'), tsvParser.fetchSheet('messages'),
                    tsvParser.fetchSheet('&output=tsv` },
        groupLastRead: { gid: 10047470groupLastRead'), tsvParser.fetchSheet('photoLibrary')
                ]);

                let isOutage =07, url: `${TSV_BASE_URL}?gid=1004747007&single=true&output=tsv` },
        photoLibrary: { gid: 1988 false;
                let bannerText = '';
                let isCurrentUserOutageExempt = false;

                if (servInfo && servInfo.length > 0) {
                    const servInfoRow = servInfo[0484974, url: `${TSV_BASE_URL}?gid=19884];
                    bannerText = servInfoRow['bannerText'] || '';
                    if (String(servInfoRow84974&single=true&output=tsv` }
    };

    // ===== TSV Parser Utility =====
    const tsvParser = {
        parse(tsvText) {
            if (!tsv['serverStatus']).toLowerCase() === 'outage') isOutage = true;
                }

                const currentUserText || tsvText.trim() === '') return [];
            const lines = tsvText.split('\nRow = accounts.find(row => (row['userID'] || row['userId']) === currentUserId);
                ').filter(line => line.trim() !== '');
            if (lines.length === 0) return [];if (currentUserRow) {
                    isCurrentUserOutageExempt = String(currentUserRow['isAdmin'] || 'FALSE').toUpperCase() === 'TRUE';
                }

                if (isOutage && !isCurrentUserOutage

            const headers = lines[0].split('\t').map(h => h.trim());
            
Exempt) {
                    return {
                        posts: [], conversations: [], currentUserFollowingList: [], currentUserFollowers            if (headers.length === 0 || headers.every(h => !h)) {
                logger.error('TSV Parser', 'Validation failed: No valid headers found');
                return [];
            }

            List: [], blockedUsersList: [],
                        currentUserData: { isSuspended: 'OUTAGE' }, bannerText
                    };
                }

                const banMap = {};
                const now = new Date();
                const data = [];
            for (let i = 1; i < lines.length; i++) {
                const values = lines[i].split('\t');
                if (values.length > headers.length * 2) {
bans.forEach(row => {
                    const username = row['username'];
                    if (username) {
                    continue; // Skip malformed rows
                }
                const row = {};
                headers.forEach((header, index) => {
                    row[header] = values[index] || '';
                });
                data                        if (!row['endDate']) banMap[username] = { reason: row['reason'], endDate: 'permanent.push(row);
            }
            return data;
        },

        async fetchSheet(sheetKey' };
                        else {
                            const endDate = new Date(row['endDate']);
                            if (!isNaN(, retryCount = 0) {
            const sheet = TSV_SHEETS[sheetKey];
            if (!sheet) {
                logger.error('TSV Fetch', `Unknown sheet key: ${sheetKey}`);endDate.getTime()) && endDate > now) banMap[username] = { reason: row['reason'], endDate:
                throw new Error(`Unknown sheet: ${sheetKey}`);
            }

            try {
                const response = await fetch(sheet.url + '&cachebust=' + Date.now());
                if (!response.ok endDate.toISOString() };
                        }
                    }
                });

                const blockMap = {};
                blocks.forEach(row => {
                    const bID = row['blockerID'] || row['Blocker ID'];
                    const blocked) throw new Error(`HTTP ${response.status}`);
                const text = await response.text();
                
ID = row['blockedID'] || row['Blocked ID'];
                    if (!blockMap[bID]) blockMap[bID] = new Set();
                    blockMap[bID].add(blockedID);
                                if (!text || text.trim() === '') throw new Error('Empty response body');

                const parsed =});

                const likesByPostMap = {};
                likes.forEach(row => {
                    const pid = row['postID'] this.parse(text);
                
                if (parsed === null || parsed === undefined) throw new Error(' || row['postId'];
                    const uid = row['userID'] || row['userId'];
                    if (!likesByPostMap[pid]) likesByPostMap[pid] = [];
                    likesByPostMap[pid].push({ likeId: row['likeID'], userId: uid });
                });

                const commentsByPostMap = {};
                commentsParser returned null/undefined');

                return parsed;
            } catch (error) {
                if (retryCount < 2) {
                    await new Promise(resolve => setTimeout(resolve, 1000 * (.forEach(row => {
                    const cid = row['commentID'] || row['commentId'];
                    ifretryCount + 1)));
                    return this.fetchSheet(sheetKey, retryCount + 1);
 (state.deletedCommentIds.has(cid)) return;
                    const pid = row['postID'] ||                }
                logger.error('TSV Fetch', `Failed to fetch ${sheetKey} after retries`, error);
                 row['postId'];
                    if (!commentsByPostMap[pid]) commentsByPostMap[pid] = [];
                    const ts = getColumn(row, 'timestamp', 'Timestamp') || new Date().toISOString();
                    throw new Error(`Failed to fetch ${sheetKey}: ${error.message}`);
            }
        },

        async fetchAllSheets() {commentsByPostMap[pid].push({ 
                        commentId: cid, postId: pid, userId: row
            const sheetKeys = Object.keys(TSV_SHEETS);
            const results = await Promise.['userID'] || row['userId'], commentText: row['commentText'], timestamp: ts 
                    });
all(sheetKeys.map(key => this.fetchSheet(key)));

            const data = {};
                            });

                const followingMap = {}; const followersMap = {};
                followers.forEach(row => {
sheetKeys.forEach((key, index) => {
                data[key] = results[index];
                                const fID = row['followerID'] || row['followerId'];
                    const flID = row['});
            return data;
        }
    };

    const getColumn = (row, ...keys) => {
        for (const key of keys) {
            if (row[key] !== undefined && rowfollowingID'] || row['followingId'];
                    if (!followingMap[fID]) followingMap[fID] = [];
                    followingMap[fID].push(String(flID));
                    if (!followersMap[key] !== '') return row[key];
            const foundKey = Object.keys(row).find([flID]) followersMap[flID] = [];
                    followersMap[flID].push(String(k => k.trim().toLowerCase() === key.toLowerCase());
            if (foundKey) return row[foundKey];
        }
        return undefined;
    };

    // ===== Data Aggregation =====
    constfID));
                });

                const postsByUserMap = {};
                postsData.forEach(row => { dataAggregator = {
        async getConversationHistory({ userId, otherUserId }) {
            try {
                
                    const pid = row['postID'] || row['postId'];
                    const uid = row['userID']const [messagesData, accounts] = await Promise.all([
                    tsvParser.fetchSheet('messages'),
 || row['userId'];
                    if (state.deletedPostIds.has(pid)) return;
                    if                    tsvParser.fetchSheet('accounts')
                ]);
                const messages = [];
                const currentUserId = (!postsByUserMap[uid]) postsByUserMap[uid] = [];
                    postsByUserMap[uid].push(pid);
                });

                const userMap = {};
                accounts.forEach(row => {
                    const uID = row['userID'] || row['userId'];
                    const rawPrivacy = getColumn(row, userId;
                const userMap = {};
                accounts.forEach(row => {
                    const uid = row['userID'] || row['userId'];
                    userMap[uid] = row;
                });

                messagesData.forEach( 'profileType', 'privacy') || 'public';
                    const profilePrivacy = String(rawPrivacy).trim().row => {
                    const msgId = row['messageID'] || row['messageId'];
                    const sendertoLowerCase() === 'private' ? 'private' : 'public';
                    const isAdmin = String(row['isAdminId = row['senderID'] || row['senderId'];
                    const recipientId = row['recipientID']'] || 'FALSE').toUpperCase() === 'TRUE';
                    let totalLikes = 0;
                    (posts || row['recipientId'];
                    const encodedContent = row['messageContent'];
                    const timestamp = row['ByUserMap[uID] || []).forEach(pid => { totalLikes += (likesByPostMap[pid] || []).length; });

                    userMap[uID] = {
                        userId: uID, username: row['username'], displayName: row['displayName'],
                        profilePictureUrl: row['profilePictureUrl'] || '', description: row['description'] || '',
                        isVerified: row['isVerified'] || 'FALSE', postVisibility: row['firePostVisibility'] || 'Everyone',
                        profilePrivacy, followers: (followersMap[uID] || []).length, following: (followingMap[uID] || []).length,
                        totalLikes, isAdmin, banDetails: banMap[row['username']] || null
                    };
                });

                const currentUserBlockedSet = blockMap[currentUserId] || new Set();
                const currentUserFollowingList = followingtimestamp'];
                    const isRead = row['isRead'];

                    if ((senderId === currentUserId && recipientId === otherUserId) || (senderId === otherUserId && recipientId === currentUserId)) {
                        let decodedMessage = '';
                        try { decodedMessage = atob(encodedContent); } catch (e) { decodedMessage = 'Could not decode message.'; }
                        messages.push({
                            messageId: msgId, senderId: senderId, senderName: userMap[senderId]?.displayName || 'Unknown',
                            messageContent: decodedMessage, timestamp: timestamp, isRead: isRead, status: 'sent'
                        });
                    }
                });
                messages.sortMap[String(currentUserId)] || [];
                const currentUserFollowersList = followersMap[String(currentUserId((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
                return { messages };
            } catch (error) {
                logger.error('Data Aggregator', 'Error in getConversationHistory', error);
                throw error;
            }
        },
        async getPosts(params)] || [];
                const blockedUsersList = Array.from(currentUserBlockedSet).map(id => userMap) {
            try {
                const currentUserId = params.userId || params;
                const [
                    [id] ? { userId: id, displayName: userMap[id].displayName, profilePictureUrl: userMapservInfo, bans, blocks, accounts, postsData,
                    comments, likes, followers, messages, groupLast[id].profilePictureUrl } : null).filter(Boolean);

                const feedItems = {};
                postsRead, photoLibrary
                ] = await Promise.all([
                    tsvParser.fetchSheet('servInfo'),Data.forEach(row => {
                    const pid = row['postID'] || row['postId'];
                     tsvParser.fetchSheet('bans'), tsvParser.fetchSheet('blocks'),
                    tsvParser.fetchconst uid = row['userID'] || row['userId'];
                    if (state.deletedPostIds.has(Sheet('accounts'), tsvParser.fetchSheet('posts'), tsvParser.fetchSheet('comments'),
                    pid)) return;
                    const authorId = uid;
                    
                    if (currentUserBlockedSet.has(tsvParser.fetchSheet('likes'), tsvParser.fetchSheet('followers'), tsvParser.fetchSheet('authorId) || (blockMap[authorId] && blockMap[authorId].has(currentUserId))) returnmessages'),
                    tsvParser.fetchSheet('groupLastRead'), tsvParser.fetchSheet('photoLibrary')
                ]);

                let isOutage = false;
                let bannerText = '';
                let isCurrentUser;
                    const author = userMap[authorId];
                    if (!author || author.banDetails) return; 

                    const isOwn = authorId === currentUserId;
                    const followsAuthor = currentUserFollowingList.OutageExempt = false;

                if (servInfo && servInfo.length > 0) {
includes(String(authorId));
                    const authorFollowsBack = (followingMap[authorId] || []                    const servInfoRow = servInfo[0];
                    bannerText = servInfoRow['bannerText'] ||).includes(String(currentUserId));
                    const areFriends = followsAuthor && authorFollowsBack;

                     '';
                    if (String(servInfoRow['serverStatus']).toLowerCase() === 'outage') isOutagelet canView = isOwn;
                    if (!isOwn) {
                        if (author.profilePrivacy === = true;
                }

                const currentUserRow = accounts.find(row => (row['userID'] || row['userId 'private') canView = areFriends;
                        else {
                            if (author.postVisibility === 'Follow']) === currentUserId);
                if (currentUserRow) {
                    isCurrentUserOutageExempt = String(ers') canView = followsAuthor;
                            else if (author.postVisibility === 'Friends') canView =currentUserRow['isAdmin'] || 'FALSE').toUpperCase() === 'TRUE';
                }

                if (isOutage && !isCurrentUserOutageExempt) {
                    return {
                        posts: [], conversations: [], currentUser areFriends;
                            else canView = true;
                        }
                    }

                    if (canView) {
                        const isStory = String(row['story'] || 'FALSE').toUpperCase() === 'TRUE';
FollowingList: [], currentUserFollowersList: [], blockedUsersList: [],
                        currentUserData: { isSuspended: 'OUTAGE' }, bannerText
                    };
                }

                const banMap = {};
                const                        feedItems[pid] = {
                            postId: pid, authorId, postContent: row['postContent'], now = new Date();
                bans.forEach(row => {
                    const username = row['username'];
 
                            timestamp: row['timestamp'], isStory, 
                            expiryTimestamp: row['expiryTimestamp'], storyDuration: row['                    if (username) {
                        if (!row['endDate']) banMap[username] = { reason: rowstoryDuration'],
                            sortTimestamp: row['timestamp']
                        };
                    }
                });

                //['reason'], endDate: 'permanent' };
                        else {
                            const endDate = new Date(row['endDate --- DUPLICATE & PENDING POST MERGE FIX ---
                let pendingPostsToKeep = [];
                if (state.localPendingPosts &&']);
                            if (!isNaN(endDate.getTime()) && endDate > now) banMap[username] = { reason: row['reason'], endDate: endDate.toISOString() };
                        }
                    }
                });

                const state.localPendingPosts.length > 0) {
                    const pendingNow = Date.now();
                    const validPending = state.localPendingPosts.filter(p => (pendingNow - new Date(p.timestamp blockMap = {};
                blocks.forEach(row => {
                    const bID = row['blockerID'] || row['Blocker ID'];
                    const blockedID = row['blockedID'] || row['Blocked ID'];
                    if (!blockMap).getTime()) < 300000); // 5 min TTL
                    
                    const feedValues = Object.values(feedItems);
                    
                    validPending.forEach(lp => {
                        const existsOnServer = feedValues[bID]) blockMap[bID] = new Set();
                    blockMap[bID].add(.some(serverPost => 
                            serverPost.authorId === lp.userId && 
                            serverPostblockedID);
                });

                const likesByPostMap = {};
                likes.forEach(row => {.postContent === lp.postContent &&
                            Math.abs(new Date(serverPost.timestamp).getTime
                    const pid = row['postID'];
                    if (!likesByPostMap[pid]) likesByPostMap[pid() - new Date(lp.timestamp).getTime()) < 600000 // 10 min tolerance] = [];
                    likesByPostMap[pid].push({ likeId: row['likeID'], userId:
                        );

                        if (!existsOnServer) {
                            pendingPostsToKeep.push(lp);
 row['userID'] });
                });

                const commentsByPostMap = {};
                comments.forEach(row => {
                    const cid = row['commentID'];
                    if (state.deletedCommentIds.has(cid)) return;
                    const                            if(!feedItems[lp.postId]) {
                                feedItems[lp.postId] = {
                                    postId: lp.postId, authorId: lp.userId, postContent: lp.postContent,
                                pid = row['postID'];
                    if (!commentsByPostMap[pid]) commentsByPostMap[pid     timestamp: lp.timestamp, isStory: lp.isStory, sortTimestamp: lp.timestamp
                                };
                            }
                        }
] = [];
                    const ts = getColumn(row, 'timestamp', 'Timestamp') || new Date().toISOString();
                    commentsByPostMap[pid].push({ 
                        commentId: cid, postId: pid, userId: row['userID'], commentText: row['commentText'], timestamp: ts 
                    });
                });                    });
                    
                    if (state.localPendingPosts.length !== pendingPostsToKeep.length) {
                        state.localPendingPosts = pendingPostsToKeep;
                        persistence.save();
                    }
                }

                const posts =

                const followingMap = {}; const followersMap = {};
                followers.forEach(row => {
                    const Object.values(feedItems).map(item => {
                    const author = userMap[item.authorId fID = row['followerID'] || row['followerId'];
                    const flID = row['followingID];
                    let pComments = (commentsByPostMap[item.postId] || [])
                        .filter('] || row['followingId'];
                    if (!followingMap[fID]) followingMap[fID] =c => !currentUserBlockedSet.has(c.userId) && !(blockMap[c.userId] && block [];
                    followingMap[fID].push(String(flID));
                    if (!followersMap[flMap[c.userId].has(currentUserId)))
                        .map(c => ({ ...c, ...(userMap[c.userId] || {}) }));
                    
                    const pendingForPost = state.pendingComments.filterID]) followersMap[flID] = [];
                    followersMap[flID].push(String(fID));
                });

                const postsByUserMap = {};
                postsData.forEach(row => {
                    (pc => pc.postId === item.postId);
                    if (pendingForPost.length > 0)const pid = row['postID'];
                    if (state.deletedPostIds.has(pid)) return; {
                        const uniquePending = pendingForPost.filter(pc => 
                            !pComments.some( 
                    const uid = row['userID'];
                    if (!postsByUserMap[uid]) postsByUserMap[uidserverC => serverC.userId === pc.userId && serverC.commentText === pc.commentText)
                        );
                        pComments =] = [];
                    postsByUserMap[uid].push(pid);
                });

                const userMap = [...pComments, ...uniquePending.map(pc => ({
                            ...pc, ...(userMap[pc.userId] || {}), isVerified: userMap[pc.userId]?.isVerified || 'FALSE'
                        })) {};
                accounts.forEach(row => {
                    const uID = row['userID'] || row['userId'];
                    const rawPrivacy = getColumn(row, 'profileType', 'privacy') || 'public';
];
                    }

                    const pLikes = likesByPostMap[item.postId] || [];
                    return { ...author, ...item,                    const profilePrivacy = String(rawPrivacy).trim().toLowerCase() === 'private' ? 'private' : ' comments: pComments, likes: pLikes };
                });

                // Cleanup Pending Comments
                if (statepublic';
                    const isAdmin = String(row['isAdmin'] || 'FALSE').toUpperCase() === 'TRUE';
.pendingComments.length > 0) {
                    const commentsAllFlat = Object.values(commentsByPost                    let totalLikes = 0;
                    (postsByUserMap[uID] || []).forEach(pidMap).flat();
                    const newPendingComments = state.pendingComments.filter(pc => {
                        const => { totalLikes += (likesByPostMap[pid] || []).length; });

                    userMap[ exists = commentsAllFlat.some(sc => sc.userId === pc.userId && sc.commentText === pcuID] = {
                        userId: uID, username: row['username'], displayName: row['displayName'],.commentText && sc.postId === pc.postId);
                        return !exists && (Date.now() -
                        profilePictureUrl: row['profilePictureUrl'] || '', description: row['description'] || '',
                         new Date(pc.timestamp).getTime() < 300000); 
                    });
                    isVerified: row['isVerified'] || 'FALSE', postVisibility: row['firePostVisibility'] || 'Everyoneif (newPendingComments.length !== state.pendingComments.length) {
                        state.pendingComments = new',
                        profilePrivacy, followers: (followersMap[uID] || []).length, following: (followingPendingComments;
                        persistence.save();
                    }
                }

                const conversationsMap = {};
                Map[uID] || []).length,
                        totalLikes, isAdmin, banDetails: banMap[rowmessages.forEach(row => {
                    const sid = row['senderID'] || row['senderId'];
['username']] || null
                    };
                });

                const currentUserBlockedSet = blockMap[currentUserId]                    const rid = row['recipientID'] || row['recipientId'];
                    
                    let convoId = null || new Set();
                const currentUserFollowingList = followingMap[String(currentUserId)] || [];
                const;
                    let otherUser = null;

                    if (sid === currentUserId || rid === currentUserId) { currentUserFollowersList = followersMap[String(currentUserId)] || [];
                const blockedUsersList = Array.
                        const otherId = sid === currentUserId ? rid : sid;
                        if (!currentUserBlockedSet.hasfrom(currentUserBlockedSet).map(id => userMap[id] ? { userId: id, displayName: userMap[id].displayName, profile(otherId) && !(blockMap[otherId] && blockMap[otherId].has(currentUserId)))PictureUrl: userMap[id].profilePictureUrl } : null).filter(Boolean);

                const feedItems {
                            convoId = otherId;
                            otherUser = { ...userMap[otherId], isGroup: false };
                        } = {};
                postsData.forEach(row => {
                    const pid = row['postID'];
                    
                    }

                    if (convoId && otherUser) {
                        let decoded = '';
                        tryif (state.deletedPostIds.has(pid)) return;
                    const authorId = row['userID']; { decoded = atob(row['messageContent']); } catch { decoded = 'Error decoding.'; }
                        if
                    
                    if (currentUserBlockedSet.has(authorId) || (blockMap[authorId] && (!conversationsMap[convoId]) {
                            conversationsMap[convoId] = { otherUser blockMap[authorId].has(currentUserId))) return;
                    const author = userMap[authorId];, lastMessage: '', timestamp: '', unreadCount: 0, messages: [] };
                        }
                        
                    if (!author || author.banDetails) return; 

                    const isOwn = authorId === currentconst c = conversationsMap[convoId];
                        const ts = row['timestamp'];
                        c.messagesUserId;
                    const followsAuthor = currentUserFollowingList.includes(String(authorId));
                    const authorFollowsBack = (followingMap[authorId] || []).includes(String(currentUserId));
                    const areFriends = followsAuthor && authorFollowsBack;

                    let canView = isOwn;
                    if (!isOwn) {
                        if (.push({ 
                            messageId: row['messageID'] || row['messageId'], senderId: sid, messageContent: decoded, timestamp: ts, 
                            isRead: row['isRead'], status: 'author.profilePrivacy === 'private') canView = areFriends;
                        else {
                            if (author.sent', senderName: userMap[sid]?.displayName 
                        });
                        if (new Date(ts)postVisibility === 'Followers') canView = followsAuthor;
                            else if (author.postVisibility === ' > new Date(c.timestamp || 0)) {
                            c.lastMessage = sid === currentUserId ? `You: ${decoded}` : decoded;
                            c.timestamp = ts;
                        }
                    }
Friends') canView = areFriends;
                            else canView = true;
                        }
                    }

                    if (canView) {
                });

                messages.forEach(row => {
                    const sid = row['senderID'] || row['senderId'];
                    const rid = row['recipientID'] || row['recipientId'];
                    if (sid                        const isStory = String(row['story'] || 'FALSE').toUpperCase() === 'TRUE';
                        feed !== currentUserId && rid === currentUserId && (row['isRead'] === 'FALSE' || row['isReadItems[pid] = {
                            postId: pid, authorId, postContent: row['postContent'], 
                            timestamp: row['timestamp'] === false)) {
                        if (conversationsMap[sid]) conversationsMap[sid].unreadCount = ('], isStory, 
                            expiryTimestamp: row['expiryTimestamp'], storyDuration: row['storyDuration'],
                            sortTimestamp:conversationsMap[sid].unreadCount || 0) + 1;
                    }
                });

                const conversations = Object.values(conversationsMap).sort((a,b) => new Date(b.timestamp row['timestamp']
                        };
                    }
                });

                // Merge Pending Posts - Checking for Duplicates against) - new Date(a.timestamp));
                const libraryImages = photoLibrary ? photoLibrary.map(r Server Data
                if (state.localPendingPosts && state.localPendingPosts.length > 0) {
                     => r['url'] || Object.values(r)[0]).filter(u => u && u.startsWith('http')) : [];

                return {
                    posts: posts.sort((a, b) => new Date(const pendingNow = Date.now();
                    const validPending = state.localPendingPosts.filter(p =>b.sortTimestamp) - new Date(a.sortTimestamp)),
                    conversations, currentUserFollowingList, currentUserFollowersList, blockedUsers (pendingNow - new Date(p.timestamp).getTime()) < 300000); 
                    constList,
                    currentUserData: userMap[currentUserId] || null, bannerText, photoLibrary: libraryImages feedValues = Object.values(feedItems);
                    const pendingPostsToKeep = [];
                    
                    validPending.forEach(
                };

            } catch (error) {
                logger.error('DataAggregator', 'getPosts failed', error);
                throw error;
            }
        },
        async getNotifications(params) {lp => {
                        // Dedup check: Same author, content, and time close enough
                        const existsOnServer = feed
            try {
                const currentUserId = params.userId || params;
                const notifData = await tsvParser.fetchSheetValues.some(serverPost => 
                            serverPost.authorId === lp.userId && 
                            server('notifications');
                const [blocks, accounts, posts] = await Promise.all([
                    tsvParser.Post.postContent === lp.postContent &&
                            Math.abs(new Date(serverPost.timestamp).fetchSheet('blocks'), tsvParser.fetchSheet('accounts'), tsvParser.fetchSheet('posts')
getTime() - new Date(lp.timestamp).getTime()) < 300000
                        );

                ]);
                const blockMap = {};
                blocks.forEach(r => {
                    const bid = r                        if (!existsOnServer) {
                            pendingPostsToKeep.push(lp);
                            if(!feed['Blocker ID'] || r['blockerID']; const blid = r['Blocked ID'] || r['blockedID'];Items[lp.postId]) {
                                feedItems[lp.postId] = {
                                    postId: lp.postId, authorId: lp.userId, postContent: lp.postContent,
                                    timestamp: lp.timestamp, isStory:
                    if(!blockMap[bid]) blockMap[bid] = new Set();
                    blockMap[bid].add(blid); lp.isStory, sortTimestamp: lp.timestamp
                                };
                            }
                        }
                    });

                });
                const userMap = {};
                accounts.forEach(r => userMap[r['userID'] || r['userId']] = { displayName: r['displayName'], profilePictureUrl: r['profilePictureUrl'] });
                const postAuthor                    
                    if (state.localPendingPosts.length !== pendingPostsToKeep.length) {
                        state.localPendingPosts = pendingPostsToKeep;
                        persistence.save();
                    }
                }

                Map = {};
                posts.forEach(r => postAuthorMap[r['postID'] || r['postIdconst posts = Object.values(feedItems).map(item => {
                    const author = userMap[item']] = r['userID'] || r['userId']);
                const currentUserBlockedSet = blockMap[currentUserId].authorId];
                    let pComments = (commentsByPostMap[item.postId] || [])
                         || new Set();

                const notifications = notifData
                    .filter(n => String(n.recipient.filter(c => !currentUserBlockedSet.has(c.userId) && !(blockMap[c.userIdUserId) === String(currentUserId))
                    .filter(n => !state.deletedNotificationIds.has(] && blockMap[c.userId].has(currentUserId)))
                        .map(c => ({ ...cn.notificationId))
                    .filter(n => !currentUserBlockedSet.has(n.actorUserId)) 
                    .map(n => {
                        const actor = userMap[n.actorUserId] || {, ...(userMap[c.userId] || {}) }));
                    
                    const pendingForPost = state.pending displayName: 'Unknown', profilePictureUrl: '' };
                        const paid = n.postId ? postAuthorMap[Comments.filter(pc => pc.postId === item.postId);
                    if (pendingForPost.length > 0) {
                        const uniquePending = pendingForPost.filter(pc => 
                            !pCommentsn.postId] : null;
                        return {
                            notificationId: n.notificationId, actorUserId: n.actorUserId,
                            actorDisplayName: actor.displayName, actorProfilePictureUrl: actor.profilePictureUrl.some(serverC => serverC.userId === pc.userId && serverC.commentText === pc.commentText)
                        );
                        pComments = [...pComments, ...uniquePending.map(pc => ({
,
                            actionType: n.actionType, postId: n.postId, postAuthorId: paid,
                            timestamp: n.timestamp, isRead: n.isRead
                        };
                    }).reverse();
                                            ...pc, ...(userMap[pc.userId] || {}), isVerified: userMap[pc.userId
                return { status: 'success', notifications };
            } catch (error) {
                logger.error]?.isVerified || 'FALSE'
                        }))];
                    }

                    const pLikes = likesByPostMap('DataAggregator', 'getNotifications failed', error);
                throw error;
            }
        },
[item.postId] || [];
                    return { ...author, ...item, comments: pComments, likes:        async search({ query, currentUserId }) {
            try {
                const [accounts, postsData] = await Promise.all([ tsvParser.fetchSheet('accounts'), tsvParser.fetchSheet('posts') ]);
                const lowerQ = query pLikes };
                });

                if (state.pendingComments.length > 0) {
                    const.toLowerCase();
                const users = []; const posts = [];
                const privacyMap = {};
                accounts.forEach(r => {
                    const uid = r['userID'] || r['userId'];
                    privacyMap[uid commentsAllFlat = Object.values(commentsByPostMap).flat();
                    const newPendingComments = state.pendingComments.filter(pc => {
                        const exists = commentsAllFlat.some(sc => sc.userId] = getColumn(r, 'profileType', 'privacy') === 'private';
                    if ((r['displayName']|| === pc.userId && sc.commentText === pc.commentText && sc.postId === pc.postId);
                        return !exists && (Date.now() - new Date(pc.timestamp).getTime() < 300000); 
                    });
                    if (newPendingComments.length !== state.pendingComments.length) {
                        state.'').toLowerCase().includes(lowerQ) || (r['username']||'').toLowerCase().includes(lowerQpendingComments = newPendingComments;
                        persistence.save();
                    }
                }

                const conversationsMap)) {
                        users.push({ userId: uid, displayName: r['displayName'], username: r['username'], = {};
                messages.forEach(row => {
                    const sid = row['senderID'] || row[' profilePictureUrl: r['profilePictureUrl'], isVerified: r['isVerified']});
                    }
                senderId'];
                    const rid = row['recipientID'] || row['recipientId'];
                    let convoId});
                postsData.forEach(r => {
                    const uid = r['userID'] || r['userId = null;
                    let otherUser = null;

                    if (sid === currentUserId || rid === currentUserId) {
                        '];
                    if (privacyMap[uid]) return;
                    if ((r['postContent']||'').const otherId = sid === currentUserId ? rid : sid;
                        if (!currentUserBlockedSet.has(othertoLowerCase().includes(lowerQ)) {
                        posts.push({ postId: r['postID'] || r['postId'], userId: uid, postContent: r['postContent'], timestamp: r['timestamp'] });
                    }Id) && !(blockMap[otherId] && blockMap[otherId].has(currentUserId))) {

                });
                return { users, posts };
            } catch (e) { logger.error('Search                            convoId = otherId;
                            otherUser = { ...userMap[otherId], isGroup:', 'Failed', e); throw e; }
        },
        async getUserProfile(params) {
             false };
                        }
                    }

                    if (convoId && otherUser) {
                        let decoded = '';
                        try { decoded = atob(row['messageContent']); } catch { decoded = 'Error decodingtry {
                const uid = params.userId;
                const cid = params.currentUserId;

                const [accounts, followers, postsData, likes, bans] = await Promise.all([
                    tsvParser.fetch.'; }
                        if (!conversationsMap[convoId]) {
                            conversationsMap[convoId] = { otherUser, lastMessage: '', timestamp: '', unreadCount: 0, messages: [] };Sheet('accounts'), tsvParser.fetchSheet('followers'),
                    tsvParser.fetchSheet('posts'), tsvParser.fetchSheet('
                        }
                        const c = conversationsMap[convoId];
                        const ts = row['timestamp'];likes'), tsvParser.fetchSheet('bans')
                ]);

                // Robust ID matching
                const uRow =
                        c.messages.push({ 
                            messageId: row['messageID'], senderId: sid, accounts.find(r => (r['userID'] || r['userId']) === uid);
                if (!u messageContent: decoded, timestamp: ts, 
                            isRead: row['isRead'], status: 'sentRow) throw new Error("User not found");

                const followerIds = followers.filter(r => (r', senderName: userMap[sid]?.displayName 
                        });
                        if (new Date(ts) > new Date(c.timestamp || 0)) {
                            c.lastMessage = sid === currentUserId ? ['followingID'] || r['followingId']) === uid).map(r => r['followerID'] || r['followerId']);
                const followingIds = followers.filter(r => (r['followerID'] || r`You: ${decoded}` : decoded;
                            c.timestamp = ts;
                        }
                    }
                });

                messages.forEach(row => {
                    const sid = row['senderID'] || row['sender['followerId']) === uid).map(r => (r['followingID'] || r['followingId']));

                const userPostIds = postsData.filter(r => (r['userID'] || r['userId']) === uid).map(r => r['postId'];
                    const rid = row['recipientID'] || row['recipientId'];
                    if (sid !==ID'] || r['postId']);
                let totalLikes = 0;
                likes.forEach(r => currentUserId && rid === currentUserId && (row['isRead'] === 'FALSE' || row['isRead'] === false)) {
                        if (conversationsMap[sid]) conversationsMap[sid].unreadCount = (convers {
                    if (userPostIds.includes(r['postID'] || r['postId'])) totalLikes++;ationsMap[sid].unreadCount || 0) + 1;
                    }
                });

                const
                });

                const now = new Date();
                let banDetails = null;
                const banRow conversations = Object.values(conversationsMap).sort((a,b) => new Date(b.timestamp) = bans.find(r => r['username'] === uRow['username']);
                if (banRow) - new Date(a.timestamp));
                const libraryImages = photoLibrary ? photoLibrary.map(r => {
                    if (!banRow['endDate']) banDetails = { reason: banRow['reason'], endDate: ' r['url'] || Object.values(r)[0]).filter(u => u && u.startsWith('httppermanent' };
                    else {
                        const endDate = new Date(banRow['endDate']);
                        if (!isNaN(endDate.getTime()) && endDate > now) banDetails = { reason: banRow['reason'], endDate:')) : [];

                return {
                    posts: posts.sort((a, b) => new Date(b endDate.toISOString() };
                    }
                }

                let relationship = 'None';
                if (uid.sortTimestamp) - new Date(a.sortTimestamp)),
                    conversations, currentUserFollowingList, currentUserFollowersList, blockedUsersList,
                    currentUserData: userMap[currentUserId] || null, bannerText, === cid) {
                    relationship = 'Self';
                } else {
                    const iFollowThem = followerIds.includes( photoLibrary: libraryImages
                };

            } catch (error) {
                logger.error('DataAggregator', 'getPosts failed', error);
                throw error;
            }
        },
        async getString(cid)); 
                    const theyFollowMe = followingIds.includes(String(cid)); 
                    if (iFollowThem &&Notifications(params) {
            try {
                const currentUserId = params.userId || params;
                const theyFollowMe) relationship = 'Friends';
                    else if (iFollowThem) relationship = 'Following'; notifData = await tsvParser.fetchSheet('notifications');
                const [blocks, accounts, posts]
                    else if (theyFollowMe) relationship = 'Follows You';
                }

                const rawPrivacy = await Promise.all([
                    tsvParser.fetchSheet('blocks'), tsvParser.fetchSheet('accounts = getColumn(uRow, 'profileType', 'Profile Type', 'privacy', 'profiletype') || 'public';
                const'), tsvParser.fetchSheet('posts')
                ]);
                const blockMap = {};
                blocks. profilePrivacy = String(rawPrivacy).trim().toLowerCase() === 'private' ? 'private' : 'public';forEach(r => {
                    const bid = r['Blocker ID']; const blid = r['Blocked ID'];
                    if(!blockMap

                return {
                    user: {
                        userId: uid, username: uRow['username'], displayName:[bid]) blockMap[bid] = new Set();
                    blockMap[bid].add(blid); uRow['displayName'],
                        profilePictureUrl: uRow['profilePictureUrl'] || '', description: uRow['description'] || '',
                        isVerified: uRow['isVerified'] || 'FALSE', postVisibility: u
                });
                const userMap = {};
                accounts.forEach(r => {
                    const uid = r['userIDRow['firePostVisibility'] || 'Everyone',
                        profilePrivacy: profilePrivacy, followers: followerIds.length'] || r['userId'];
                    userMap[uid] = { displayName: r['displayName'], profilePictureUrl: r['profilePictureUrl'] };
                });
                const postAuthorMap = {};
                posts.forEach, following: followingIds.length,
                        totalLikes: totalLikes, isAdmin: String(uRow['isAdmin(r => postAuthorMap[r['postID']] = r['userID']);
                const currentUserBlockedSet ='] || 'FALSE').toUpperCase() === 'TRUE',
                        banDetails: banDetails, relationship: relationship
                     blockMap[currentUserId] || new Set();

                const notifications = notifData
                    .filter(n}
                };

            } catch (error) {
                logger.error('Data Aggregator', 'getUser => String(n.recipientUserId) === String(currentUserId))
                    .filter(n => !state.Profile failed', error);
                throw error;
            }
        }
    };

    const state =deletedNotificationIds.has(n.notificationId))
                    .filter(n => !currentUserBlockedSet.has {
        currentUser: null, posts: [], currentUserFollowingList: [], currentUserFollowersList: [],
        notifications(n.actorUserId)) 
                    .map(n => {
                        const actor = userMap[n: [], unreadNotificationCount: 0, currentView: null, profileUser: null,
        backgroundPosts.actorUserId] || { displayName: 'Unknown', profilePictureUrl: '' };
                        const paid = n.: null, backgroundRefreshIntervalId: null, storyUpdateIntervalId: null,
        feedScrollPosition: postId ? postAuthorMap[n.postId] : null;
                        return {
                            notificationId: n.0, postImageUrl: null, postVideoUrl: null, editingPostId: null, banCountdownIntervalId:notificationId, actorUserId: n.actorUserId,
                            actorDisplayName: actor.displayName, actorProfilePictureUrl null,
        scrollToPostId: null, conversations: [],
        currentConversation: { id: null, messages: actor.profilePictureUrl,
                            actionType: n.actionType, postId: n.postId, post: [], isGroup: false, creatorId: null, members: [] },
        messagePollingIntervalId: nullAuthorId: paid,
                            timestamp: n.timestamp, isRead: n.isRead
                        };
                    }).reverse();
                
                return { status: 'success', notifications };
            } catch (error),
        reporting: { userId: null, postId: null },
        banningUserId: null,
        blockedUsersList: [],
        localBlocklist: new Set(),
        isConversationLoading: false,
         {
                logger.error('DataAggregator', 'getNotifications failed', error);
                throw error;
newChat: { selectedUsers: new Map() },
        groupEdit: { membersToAdd: new Set(), members            }
        },
        async search({ query, currentUserId }) {
            try {
                const [accounts, postsData] = await Promise.all([ tsvParser.fetchSheet('accounts'), tsvParser.fetchSheet('posts') ]);
                const lowerQ = query.toLowerCase();
                const users = []; const postsToRemove: new Set() },
        userProfileCache: {},
        search: { query: '', results: null, isLoading: false },
        currentFeedType: 'foryou',
        previousView: null,
        currentPostDetail: null,
        freshDataLoaded: false,
        deletedNotificationIds: new Set(),
        deletedPostIds: = [];
                const privacyMap = {};
                accounts.forEach(r => {
                    const uid = r new Set(),
        deletedCommentIds: new Set(),
        photoLibrary: [],
        
        // Persistent['userID'] || r['userId'];
                    privacyMap[uid] = getColumn(r, 'profileType') === 'private';
                     States Loaded from Storage
        localPendingPosts: JSON.parse(localStorage.getItem('kangaroo_pendingPosts') ||if ((r['displayName']||'').toLowerCase().includes(lowerQ) || (r['username']||' '[]'),
        pendingComments: JSON.parse(localStorage.getItem('kangaroo_pendingComments') || '[]').toLowerCase().includes(lowerQ)) {
                        users.push({ userId: uid, displayName: r['displayName'),
        pendingOverrides: {
            likes: JSON.parse(localStorage.getItem('kangaroo_pendingLikes') || '{}'),
            follows: JSON.parse(localStorage.getItem('kangaroo_pendingFollows') || '{}')'], username: r['username'], profilePictureUrl: r['profilePictureUrl'], isVerified: r['isVerified
        },
        
        pendingCommentImages: {},
        pendingCommentDrafts: {}
    };
']});
                    }
                });
                postsData.forEach(r => {
                    if (privacyMap[r['userID']]) return;
                    if ((r['postContent']||'').toLowerCase().includes(lowerQ)) {
                            
    window.kangarooState = state;

    // Persistence Helper
    const persistence = {
        saveposts.push({ postId: r['postID'], userId: r['userID'], postContent: r['postContent() {
            localStorage.setItem('kangaroo_pendingPosts', JSON.stringify(state.localPendingPosts));
'], timestamp: r['timestamp'] });
                    }
                });
                return { users, posts };
                        localStorage.setItem('kangaroo_pendingComments', JSON.stringify(state.pendingComments));
            localStorage.setItem} catch (e) { logger.error('Search', 'Failed', e); throw e; }
        },('kangaroo_pendingLikes', JSON.stringify(state.pendingOverrides.likes));
            localStorage.setItem('kangaroo
        async getUserProfile(params) {
            try {
                const uid = params.userId;
                _pendingFollows', JSON.stringify(state.pendingOverrides.follows));
        }
    };

    const views = {
        auth: document.getElementById('auth-view'), feed: document.getElementById('main-const cid = params.currentUserId;

                // Robust ID Matching Logic for Profile
                const [accounts, followers, postsData, likes, bans] = await Promise.all([
                    tsvParser.fetchSheet('accounts'),app-view'),
        profile: document.getElementById('profile-page-view'), editProfile: document.getElementById('edit-profile-view'),
        suspended: document.getElementById('suspended-view'), outage: document.getElementById tsvParser.fetchSheet('followers'),
                    tsvParser.fetchSheet('posts'), tsvParser.fetch('outage-view'),
        hashtagFeed: document.getElementById('hashtag-feed-view'), messages: documentSheet('likes'), tsvParser.fetchSheet('bans')
                ]);

                const uRow = accounts..getElementById('messages-view'),
        settings: document.getElementById('settings-view'),
        search: documentfind(r => (r['userID'] || r['userId']) === uid);
                if (!uRow).getElementById('search-view'),
        createPost: document.getElementById('create-post-view'),
         throw new Error("User not found");

                const followerIds = followers.filter(r => (r['followingID'] || r['followingId']) === uid).map(r => r['followerID'] || r['followerpostDetail: document.getElementById('post-detail-view')
    };

    const modals = {
        Id']);
                const followingIds = followers.filter(r => (r['followerID'] || r['followernotifications: document.getElementById('notifications-modal'),
        imageUrl: document.getElementById('image-url-modal'),
        videoUrl: document.getElementById('video-url-modal'),
        report: document.getElementById('reportId']) === uid).map(r => (r['followingID'] || r['followingId']));

                const userPostIds = posts-modal'),
        profileShortcut: document.getElementById('profile-shortcut-modal'),
        newChat: documentData.filter(r => (r['userID'] || r['userId']) === uid).map(r => r['postID']);
                let.getElementById('new-chat-modal'),
        groupSettings: document.getElementById('group-settings-modal'), totalLikes = 0;
                likes.forEach(r => { if (userPostIds.includes(r
        ban: document.getElementById('ban-modal')
    };

    const VERIFIED_SVG = `<['postID'])) totalLikes++; });

                const now = new Date();
                let banDetails = null;span class="material-symbols-rounded" style="color: #1DA1F2; vertical-align:
                const banRow = bans.find(r => r['username'] === uRow['username']);
                 -4px; margin-left: 5px;">verified</span>`;

    const applyOptimisticUpdates = (if (banRow) {
                    if (!banRow['endDate']) banDetails = { reason: banRow['posts) => {
        const now = Date.now();
        const OVERRIDE_TIMEOUT = 1reason'], endDate: 'permanent' };
                    else {
                        const endDate = new Date(banRow['endDate20000; 

        // Cleanup expired overrides
        let changed = false;
        for (']);
                        if (!isNaN(endDate.getTime()) && endDate > now) banDetails = { reason: banRowconst postId in state.pendingOverrides.likes) {
            if (now - state.pendingOverrides.likes[['reason'], endDate: endDate.toISOString() };
                    }
                }

                let relationship = 'None';postId].timestamp > OVERRIDE_TIMEOUT) {
                delete state.pendingOverrides.likes[postId];

                if (uid === cid) relationship = 'Self';
                else {
                    const iFollowThem                changed = true;
            }
        }
        for (const userId in state.pendingOverrides.follows = followerIds.includes(String(cid)); 
                    const theyFollowMe = followingIds.includes(String) {
            if (now - state.pendingOverrides.follows[userId].timestamp > OVERRIDE_TIMEOUT(cid)); 
                    if (iFollowThem && theyFollowMe) relationship = 'Friends';
                    ) {
                delete state.pendingOverrides.follows[userId];
                changed = true;
            }
else if (iFollowThem) relationship = 'Following';
                    else if (theyFollowMe) relationship =        }
        if (changed) persistence.save();

        posts.forEach(post => {
            // 'Follows You';
                }

                const rawPrivacy = getColumn(uRow, 'profileType', Apply Pending Likes
            const likeOverride = state.pendingOverrides.likes[post.postId];
            if ( 'privacy') || 'public';
                const profilePrivacy = String(rawPrivacy).trim().toLowerCase() === 'likeOverride) {
                const hasLike = post.likes.some(l => l.userId === state.private' ? 'private' : 'public';

                return {
                    user: {
                        userId: uid, usernamecurrentUser.userId);
                if (likeOverride.status === true && hasLike) {
                    delete state.pendingOverrides.likes[post.: uRow['username'], displayName: uRow['displayName'],
                        profilePictureUrl: uRow['profilePicturepostId];
                    persistence.save();
                } else if (likeOverride.status === false && !hasLikeUrl'] || '', description: uRow['description'] || '',
                        isVerified: uRow['isVerified']) {
                    delete state.pendingOverrides.likes[post.postId];
                    persistence.save();
                 || 'FALSE', postVisibility: uRow['firePostVisibility'] || 'Everyone',
                        profilePrivacy, followers: followerIds.length, following: followingIds.length, totalLikes,
                        isAdmin: String(uRow['isAdmin'] || 'FALSE').toUpperCase() === 'TRUE',
                        banDetails, relationship
                    }
                };
            } catch (error) {
} else {
                    if (likeOverride.status === true) post.likes.push({ userId: state.currentUser.userId });
                    else post.likes = post.likes.filter(l => l.userId !== state.currentUser.userId);
                }
            }
        });

        const followOverrides = state.pendingOverrides.follows;
        // Apply Pending Follows
        for (const userId in followOverrides) {
            const                logger.error('Data Aggregator', 'getUserProfile failed', error);
                throw error;
            } override = followOverrides[userId];
            const isFollowing = state.currentUserFollowingList.includes(userId);

        }
    };

    const state = {
        currentUser: null, posts: [], currentUserFollowingList            
            if (override.status === true && isFollowing) {
                delete state.pendingOverrides.follows: [], currentUserFollowersList: [],
        notifications: [], unreadNotificationCount: 0, currentView:[userId];
                persistence.save();
            } else if (override.status === false && !isFollowing null, profileUser: null,
        backgroundPosts: null, backgroundRefreshIntervalId: null, storyUpdateInterval) {
                delete state.pendingOverrides.follows[userId];
                persistence.save();
            } elseId: null,
        feedScrollPosition: 0, postImageUrl: null, postVideoUrl: null, {
                if (override.status === true) {
                    if (!state.currentUserFollowingList.includes( editingPostId: null, banCountdownIntervalId: null,
        scrollToPostId: null, conversations: [],userId)) state.currentUserFollowingList.push(userId);
                } else {
                    state.currentUserFollowingList
        currentConversation: { id: null, messages: [], isGroup: false, creatorId: null, members: [] },
        messagePollingIntervalId: null,
        reporting: { userId: null, postId: null = state.currentUserFollowingList.filter(id => id !== userId);
                }
            }
        }
        
        if (state },
        banningUserId: null,
        blockedUsersList: [],
        localBlocklist: new Set.profileUser) {
            const followOverride = state.pendingOverrides.follows[state.profileUser.userId(),
        isConversationLoading: false,
        newChat: { selectedUsers: new Map() },
        ];
            if (followOverride) {
                const isFollowing = followOverride.status;
                const isgroupEdit: { membersToAdd: new Set(), membersToRemove: new Set() },
        userProfileCache: {},Follower = state.currentUserFollowersList.includes(state.profileUser.userId);
                if (isFollowing && isFollower) state.profileUser.relationship = 'Friends';
                else if (isFollowing)
        search: { query: '', results: null, isLoading: false },
        currentFeedType: 'foryou',
        previousView: null,
        currentPostDetail: null,
        freshDataLoaded: state.profileUser.relationship = 'Following';
                else if (isFollower) state.profileUser. false,
        deletedNotificationIds: new Set(),
        deletedPostIds: new Set(),
        deletedCommentrelationship = 'Follows You';
                else state.profileUser.relationship = 'None';
            }
Ids: new Set(),
        photoLibrary: [],
        localPendingPosts: JSON.parse(localStorage.getItem        }
    };

    const api = {
        queue: [],
        isProcessingQueue: false,('kangaroo_pendingPosts') || '[]'),
        pendingComments: JSON.parse(localStorage.getItem('kangaroo
        pendingCalls: new Map(), 
        lastCallTime: new Map(), 

        debounce(key_pendingComments') || '[]'),
        pendingOverrides: {
            likes: JSON.parse(localStorage., delay = 300) {
            const last = this.lastCallTime.get(key)getItem('kangaroo_pendingLikes') || '{}'),
            follows: JSON.parse(localStorage.getItem('kangaroo_ || 0;
            const now = Date.now();
            if (now - last < delay) return false; 
            this.pendingFollows') || '{}')
        },
        pendingCommentImages: {},
        pendingCommentDrafts:lastCallTime.set(key, now);
            return true;
        },

        async enqueue(action {}
    };
    
    window.kangarooState = state;

    const persistence = {
        save, body, method = 'POST') {
            return new Promise((resolve, reject) => {
                this() {
            localStorage.setItem('kangaroo_pendingPosts', JSON.stringify(state.localPendingPosts));
            localStorage.setItem('kangaroo_pendingComments', JSON.stringify(state.pendingComments));
            localStorage.setItem.queue.push({ action, body, method, resolve, reject });
                this.processQueue();
            ('kangaroo_pendingLikes', JSON.stringify(state.pendingOverrides.likes));
            localStorage.setItem('kangaroo});
        },

        async processQueue() {
            if (this.isProcessingQueue || this.queue_pendingFollows', JSON.stringify(state.pendingOverrides.follows));
        }
    };

    .length === 0) return;
            this.isProcessingQueue = true;
            const request = this.queue.shift(); 

            try {
                logger.info('API Queue', `Processing ${request.const views = {
        auth: document.getElementById('auth-view'), feed: document.getElementById('main-action}`);
                const result = await this.callAppsScript(request.action, request.body, request.app-view'),
        profile: document.getElementById('profile-page-view'), editProfile: document.getElementByIdmethod);
                request.resolve(result);
            } catch (error) {
                logger.error('('edit-profile-view'),
        suspended: document.getElementById('suspended-view'), outage: document.getElementByIdAPI Queue', `Error processing ${request.action}`, error);
                request.reject(error);
            }('outage-view'),
        hashtagFeed: document.getElementById('hashtag-feed-view'), messages: document finally {
                this.isProcessingQueue = false;
                if (this.queue.length > 0.getElementById('messages-view'),
        settings: document.getElementById('settings-view'),
        search: document) this.processQueue();
            }
        },

        async call(action, body = {}, method = 'POST') {
            const readActions = ['getPosts', 'getNotifications', 'getUserProfile', 'search.getElementById('search-view'),
        createPost: document.getElementById('create-post-view'),
        postDetail: document.getElementById('post-detail-view')
    };

    const modals = {
        ', 'getConversationHistory'];

            if (readActions.includes(action) || (method === 'GET'notifications: document.getElementById('notifications-modal'),
        imageUrl: document.getElementById('image-url-modal'), && action !== 'login')) {
                try {
                    let result;
                    if (typeof dataAggregator
        videoUrl: document.getElementById('video-url-modal'),
        report: document.getElementById('report[action] === 'function') {
                        result = await dataAggregator[action](body);
                    }-modal'),
        profileShortcut: document.getElementById('profile-shortcut-modal'),
        newChat: document else {
                        throw new Error(`TSV action ${action} not implemented`);
                    }
                    return result.getElementById('new-chat-modal'),
        groupSettings: document.getElementById('group-settings-modal'),;
                } catch (tsvError) {
                    logger.warn('API Fallback', `TSV failed
        ban: document.getElementById('ban-modal')
    };

    const VERIFIED_SVG = `< for ${action}, trying Apps Script`, { error: tsvError.message });
                    return await this.enqueuespan class="material-symbols-rounded" style="color: #1DA1F2; vertical-align:(action, body, method);
                }
            }
            return await this.enqueue(action, body -4px; margin-left: 5px;">verified</span>`;

    const applyOptimisticUpdates = (, method);
        },

        async callAppsScript(action, body, method, retryCount = 0posts) => {
        const now = Date.now();
        const OVERRIDE_TIMEOUT = 1) {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort20000; 

        let changed = false;
        for (const postId in state.pending(), 30000); 
            
            try {
                let url = SCRIPT_URLOverrides.likes) {
            if (now - state.pendingOverrides.likes[postId].timestamp > OVERR;
                const options = { method, mode: 'cors', redirect: 'follow', signal: controller.signalIDE_TIMEOUT) {
                delete state.pendingOverrides.likes[postId];
                changed = true;
 };

                if (method === 'GET') {
                    const params = new URLSearchParams({ action, ...body            }
        }
        for (const userId in state.pendingOverrides.follows) {
            if ( });
                    url += `?${params.toString()}`;
                } else {
                    options.body =now - state.pendingOverrides.follows[userId].timestamp > OVERRIDE_TIMEOUT) {
                delete state JSON.stringify({ action, ...body });
                }

                const response = await fetch(url, options);
                clearTimeout(timeoutId);

                if (!response.ok) throw new Error(`Network error: ${.pendingOverrides.follows[userId];
                changed = true;
            }
        }
        if (changed) persistence.save();

        posts.forEach(post => {
            const likeOverride = state.pendingOverrides.likes[post.postId];
            if (likeOverride) {
                const hasLike = post.response.status}`);
                const result = await response.json();
                
                if (result.status === 'error') {
                    const error = new Error(result.message);
                    if (result.banDetailslikes.some(l => l.userId === state.currentUser.userId);
                if ((likeOverride.status === true && has) error.banDetails = result.banDetails;
                    if (result.user) error.user = resultLike) || (likeOverride.status === false && !hasLike)) {
                    delete state.pendingOverrides..user;
                    throw error;
                }
                logger.success('API', `Action ${action}likes[post.postId];
                    persistence.save();
                } else {
                    if (likeOverride. completed`);
                return result;
            } catch (error) {
                if (retryCount < 2status === true) post.likes.push({ userId: state.currentUser.userId });
                    else post.likes && (error.name === 'AbortError' || (error.message && error.message.includes('HTTP  = post.likes.filter(l => l.userId !== state.currentUser.userId);
                }
            5')) || (error.message && error.message.toLowerCase().includes('network')))) {
                    logger.warn('API Retry', `Retrying ${action} (Attempt ${retryCount + 1})...`);
                    }
        });

        const followOverrides = state.pendingOverrides.follows;
        for (const userId inawait new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, retryCount)));
                    return this.callAppsScript(action, body, method, retryCount + 1);
                 followOverrides) {
            const override = followOverrides[userId];
            const isFollowing = state.currentUserFollowingList.includes(userId);
            if ((override.status === true && isFollowing) || (override.status === false && !isFollowing)) {
                delete state.pendingOverrides.follows[userId];
                persistence.}
                throw error; 
            }
        }
    };

    const ui = {
        render() {
            const header = document.querySelector('header');
            const isUserLoggedIn = !['auth', 'suspended', 'outage'].includes(state.currentView);
            header.classList.toggle('hidden', !isUserLoggedIn);
            document.body.classList.toggle('logged-in', isUserLoggedIn);
            Object.valuessave();
            } else {
                if (override.status === true) {
                    if (!state.(views).forEach(v => v.classList.remove('active'));
            views[state.currentView]?.currentUserFollowingList.includes(userId)) state.currentUserFollowingList.push(userId);
                } else {
classList.add('active');

            if (state.currentView === 'feed') {
                const isFor                    state.currentUserFollowingList = state.currentUserFollowingList.filter(id => id !== userId);
                }You = state.currentFeedType === 'foryou';
                const activeFeedEl = document.getElementById(
            }
        }
        
        if (state.profileUser) {
            const followOverride =isForYou ? 'foryou-feed' : 'following-feed');
                const inactiveFeedEl = state.pendingOverrides.follows[state.profileUser.userId];
            if (followOverride) {
                 document.getElementById(isForYou ? 'following-feed' : 'foryou-feed');
                thisconst isFollowing = followOverride.status;
                const isFollower = state.currentUserFollowersList.includes(state.profileUser.userId);
                if (isFollowing && isFollower) state.profileUser.relationship = 'Friends';
                else if (isFollowing) state.profileUser.relationship = 'Following';
                else if (isFollower) state.profileUser.relationship = 'Follows You';
                else state.profileUser.relationship = 'None';
            }
        }
    };

    const api = {
        queue: [],
        isProcessingQueue: false,
        pendingCalls: new Map(), 
        .renderFeed(state.posts, activeFeedEl, true);
                inactiveFeedEl.innerHTML = '';
lastCallTime: new Map(), 

        debounce(key, delay = 300) {
                            document.getElementById('feed-container').style.transform = isForYou ? 'translateX(0)' : 'const last = this.lastCallTime.get(key) || 0;
            const now = Date.translateX(-50%)';
                document.querySelectorAll('.feed-nav-tab').forEach(t => t.now();
            if (now - last < delay) return false; 
            this.lastCallTime.set(key, now);
            return true;
        },

        async enqueue(action, body, method = 'POST') {
            return new Promise((resolve, reject) => {
                this.queue.push({ action, body, method, resolve, reject });
                this.processQueue();
            });
        },

        async processQueue() {
            if (this.isProcessingQueue || this.queue.length === classList.remove('active'));
                document.querySelector(`.feed-nav-tab[data-feed-type="${0) return;
            this.isProcessingQueue = true;
            const request = this.queue.shiftstate.currentFeedType}"]`).classList.add('active');
            }
            if (state.currentView === 'profile') this.renderProfilePage();
            if (state.currentView === 'editProfile') this.renderEditProfilePage();
            if (state.currentView === 'messages') this.renderMessagesPage();
            if (state.currentView === 'settings') this.renderSettingsPage();
            if (state.currentView === 'search') this.renderSearchView();
            if (state.currentView === 'postDetail') this.renderPostDetailPage();
        },
        renderPostDetailPage() {
            const container = views.post(); 

            try {
                logger.info('API Queue', `Processing ${request.action}`);
                const result = await this.callAppsScript(request.action, request.body, request.method);
                Detail.querySelector('.container');
            container.innerHTML = '';
            if (!state.currentPostDetail) {
                container.innerHTML = `<p class="error-message" style="text-align:center;">Could not load post.</p>`;
                return;
            }
            const backButton = document.createElement('a');request.resolve(result);
            } catch (error) {
                logger.error('API Queue', `Error processing ${request.action}`, error);
                request.reject(error);
            } finally {
                
            backButton.className = 'back-btn';
            backButton.innerHTML = '&larr; Backthis.isProcessingQueue = false;
                if (this.queue.length > 0) this.process';
            backButton.dataset.navBack = true;
            const postContentDiv = document.createElement('Queue();
            }
        },

        async call(action, body = {}, method = 'POST') {div');
            postContentDiv.id = 'post-detail-content';
            container.appendChild(backButton);
            container.appendChild(postContentDiv);
            const postElement = this.createPostElement(
            const readActions = ['getPosts', 'getNotifications', 'getUserProfile', 'search', 'getConversationstate.currentPostDetail, { isDetailView: true });
            postContentDiv.appendChild(postElement);History'];

            if (readActions.includes(action) || (method === 'GET' && action !== 'login')) {
        },
        renderBanPage(banDetails) { if (state.banCountdownIntervalId) clearInterval(
                try {
                    let result;
                    if (typeof dataAggregator[action] === 'function')state.banCountdownIntervalId); const reasonEl = document.getElementById('ban-reason'); const timerContainer = document {
                        result = await dataAggregator[action](body);
                    } else {
                        throw new Error.getElementById('ban-timer-container'); const countdownEl = document.getElementById('ban-countdown'); reasonEl.(`TSV action ${action} not implemented`);
                    }
                    return result;
                } catch (tsvtextContent = banDetails.reason || 'No reason provided.'; if (banDetails.endDate === 'permanent') { timerError) {
                    logger.warn('API Fallback', `TSV failed for ${action}, trying Apps Script`, { error: tsvErrorContainer.classList.add('hidden'); return; } timerContainer.classList.remove('hidden'); const endDate = new.message });
                    return await this.enqueue(action, body, method);
                }
            }
            return await this.enqueue(action, body, method);
        },

        async callAppsScript(action Date(banDetails.endDate); const updateCountdown = () => { const now = new Date(); const diff = endDate, body, method, retryCount = 0) {
            const controller = new AbortController();
             - now; if (diff <= 0) { countdownEl.textContent = 'Your ban has expired. Please refreshconst timeoutId = setTimeout(() => controller.abort(), 30000); 
            
            try the page.'; clearInterval(state.banCountdownIntervalId); state.banCountdownIntervalId = null; return; } const days = Math.floor(diff / (1000 * 60 * 60 * 24)); const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); const minutes = Math.floor((diff {
                let url = SCRIPT_URL;
                const options = { method, mode: 'cors', redirect: 'follow', signal: controller.signal };

                if (method === 'GET') {
                    const % (1000 * 60 * 60)) / (1000 * 60)); let countdownText = ''; if (days > 0) countdownText += `${days}d `; if (hours > 0 || days > 0) countdownText += `${hours}h `; countdownText += `${minutes}m`; countdownEl.textContent = params = new URLSearchParams({ action, ...body });
                    url += `?${params.toString()}`;
                } else {
                    options.body = JSON.stringify({ action, ...body });
                }

                 countdownText.trim(); }; updateCountdown(); state.banCountdownIntervalId = setInterval(updateCountdown, 10const response = await fetch(url, options);
                clearTimeout(timeoutId);

                if (!response.00); },
        renderFeed(posts, container, isMainFeed = false) {
            const validPosts = posts.filter(p => {
                const isBlocked = state.localBlocklist.has(pok) throw new Error(`Network error: ${response.status}`);
                const result = await response.json();.userId);
                if (isBlocked) return false;
                const isStory = p.isStory ===
                
                if (result.status === 'error') {
                    const error = new Error(result.message);
                    if (result.banDetails) error.banDetails = result.banDetails;
                    if (result.user) error.user = result.user;
                    throw error;
                }
                logger true || String(p.isStory).toUpperCase() === 'TRUE';
                if (isStory) return false;
                return true;
            });

            let postsToRender = [...validPosts];

            if (.success('API', `Action ${action} completed`);
                return result;
            } catch (error) {
                if (retryCount < 2 && (error.name === 'AbortError' || (error.isMainFeed) {
                if (state.currentFeedType === 'following') {
                    postsToRendermessage && error.message.includes('HTTP 5')) || (error.message && error.message.toLowerCase(). = postsToRender.filter(post => {
                        const isFollowed = state.currentUserFollowingList.includes(String(post.userId));
                        const isOwnPost = String(post.userId) === String(stateincludes('network')))) {
                    logger.warn('API Retry', `Retrying ${action} (Attempt ${retryCount + 1})...`);
                    await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, retryCount)));
                    return this.callAppsScript(action, body, method, retryCount + 1);
                }
                throw error; 
            }
        }
.currentUser.userId);
                        return isFollowed || isOwnPost;
                    }).sort((a, b    };

    const ui = {
        render() {
            const header = document.querySelector('header');) => new Date(b.timestamp) - new Date(a.timestamp));
                } else {
                    
            const isUserLoggedIn = !['auth', 'suspended', 'outage'].includes(state.currentViewconst now = new Date();
                    const twentyFourHoursAgo = new Date(now.getTime() - 2);
            header.classList.toggle('hidden', !isUserLoggedIn);
            document.body.classList.toggle('logged-in', isUserLoggedIn);
            Object.values(views).forEach(v => v.4 * 60 * 60 * 1000);
                    const stories = []; const priorityclassList.remove('active'));
            views[state.currentView]?.classList.add('active');

            if (state.currentView === 'feed') {
                const isForYou = state.currentFeedType === 'PostsWithImage = []; const priorityPostsWithoutImage = []; const otherPosts = [];
                    postsToRender.forEachforyou';
                const activeFeedEl = document.getElementById(isForYou ? 'foryou-(post => {
                        const isFollowed = state.currentUserFollowingList.includes(String(post.userIdfeed' : 'following-feed');
                const inactiveFeedEl = document.getElementById(isForYou ? 'following-feed' : 'foryou-feed');
                
                this.renderFeed(state.posts, activeFeedEl, true);));
                        const isOwnPost = String(post.userId) === String(state.currentUser.userId);

                inactiveFeedEl.innerHTML = '';
                
                document.getElementById('feed-container').style.transform                        const hasImage = (post.postContent || '').includes('<img') || (post.postContent || ''). = isForYou ? 'translateX(0)' : 'translateX(-50%)';
                document.querySelectorAll('.feed-nav-tabincludes('<video');
                        const postDate = new Date(post.timestamp); 
                        if ((isFollow').forEach(t => t.classList.remove('active'));
                document.querySelector(`.feed-nav-tab[data-feed-type="${state.currentFeedType}"]`).classList.add('active');
            }
            if (state.currentView === 'profile') this.renderProfilePage();
            if (state.currentView === 'editProfile') this.renderEditProfilePage();
            if (state.currentView === 'messages') this.renderMessagesPage();
            if (state.currentView === 'settings') this.renderSettingsPageed || isOwnPost) && postDate > twentyFourHoursAgo) { 
                            if (hasImage)();
            if (state.currentView === 'search') this.renderSearchView();
            if (state. priorityPostsWithImage.push(post);
                            else priorityPostsWithoutImage.push(post); 
                        currentView === 'postDetail') this.renderPostDetailPage();
        },
        renderPostDetailPage() {
} else otherPosts.push(post); 
                    });
                    priorityPostsWithImage.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                    priorityPostsWithoutImage.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            const container = views.postDetail.querySelector('.container');
            container.innerHTML = '';
            if (!state.currentPostDetail) {
                container.innerHTML = `<p class="error-message" style="text-align:center;">Could not load post.</p>`;
                return;
            }
            const backButton = document.createElement('a');
            backButton.className = 'back-btn';
            backButton.                    postsToRender = [...stories, ...priorityPostsWithImage, ...priorityPostsWithoutImage, ...otherPosts];
                }
            }

            if (!postsToRender || postsToRender.length === 0) {innerHTML = '&larr; Back';
            backButton.dataset.navBack = true;
            const post
                const message = isMainFeed && state.currentFeedType === 'following'
                    ? 'Posts fromContentDiv = document.createElement('div');
            postContentDiv.id = 'post-detail-content'; people you follow will appear here.'
                    : 'No posts to see here.';
                container.innerHTML = `<
            container.appendChild(backButton);
            container.appendChild(postContentDiv);
            const postElementp style="text-align: center; color: var(--secondary-text-color); margin-top: 40px;">${message}</p>`;
                return;
            }

            container.innerHTML = '';
            postsToRender.forEach(post => container.appendChild(this.createPostElement(post, { isDetail = this.createPostElement(state.currentPostDetail, { isDetailView: true });
            postContentView: false })));
        },
        renderProfilePage() {
            if (!state.profileUser) return;
            const isBlockedLocally = state.localBlocklist.has(state.profileUser.userIdDiv.appendChild(postElement);
        },
        renderBanPage(banDetails) { if (state.);

            if (state.profileUser.isSuspended || state.profileUser.banDetails) {
banCountdownIntervalId) clearInterval(state.banCountdownIntervalId); const reasonEl = document.getElementById('ban-                const pfpUrl = sanitizeHTML(state.profileUser.profilePictureUrl) || `https://api.reason'); const timerContainer = document.getElementById('ban-timer-container'); const countdownEl = document.getElementById('dicebear.com/8.x/thumbs/svg?seed=${state.profileUser.username}`;
                ban-countdown'); reasonEl.textContent = banDetails.reason || 'No reason provided.'; if (banDetails.document.getElementById('profile-content').innerHTML = `
                    <div class="profile-header">
                        <endDate === 'permanent') { timerContainer.classList.add('hidden'); return; } timerContainer.classList.removeimg src="${pfpUrl}" class="pfp pfp-lg" style="filter: grayscale(100%); cursor: default;">
                        <div class="display-name" style="color: var(--secondary-('hidden'); const endDate = new Date(banDetails.endDate); const updateCountdown = () => { const now =text-color);">${sanitizeHTML(state.profileUser.displayName)}</div>
                        <div class="username" style="color: var(--secondary-text-color);">@${sanitizeHTML(state.profileUser.username)} new Date(); const diff = endDate - now; if (diff <= 0) { countdownEl.textContent = '</div>
                    </div>
                    <div class="private-profile-message">
                        <span class="material-symbols-rounded" style="color: var(--error-color);">block</span>
                        <h3>Account Suspended</h3>
Your ban has expired. Please refresh the page.'; clearInterval(state.banCountdownIntervalId); state.banCountdownInterval                        <p>This account has been banned for violating our Terms of Service.</p>
                    </div>`;
                document.getElementById('profile-feed').innerHTML = '';
                return;
            }

            if (isBlockedLocally) {
                document.getElementById('profile-content').innerHTML = `<p style="text-align:Id = null; return; } const days = Math.floor(diff / (1000 * 6center; padding: 40px; color:var(--secondary-text-color);">You have blocked this user.</p>`;
                document.getElementById('profile-feed').innerHTML = '';
                return;
            }

0 * 60 * 24)); const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); const minutes = Math.floor((diff % (1000 * 60 *             const isOwnProfile = state.currentUser?.userId === state.profileUser.userId;
            const pfpUrl = sanitizeHTML(state.profileUser.profilePictureUrl) || `https://api.dicebear.com60)) / (1000 * 60)); let countdownText = ''; if (days > /8.x/thumbs/svg?seed=${state.profileUser.username}`;
            const postCount =0) countdownText += `${days}d `; if (hours > 0 || days > 0) countdownText state.posts.filter(p => p.userId === state.profileUser.userId).length;
            let += `${hours}h `; countdownText += `${minutes}m`; countdownEl.textContent = countdownText.trim(); actionButtonHTML = '';
            let optionsMenuHTML = '';

            if (!isOwnProfile) {
                 }; updateCountdown(); state.banCountdownIntervalId = setInterval(updateCountdown, 1000); },
const relationship = state.profileUser.relationship;
                let followButton = '';
                if (relationship === '        renderFeed(posts, container, isMainFeed = false) {
            const validPosts = posts.filterFriends') followButton = `<button id="follow-btn" class="secondary">Friends</button>`;
                else(p => {
                const isBlocked = state.localBlocklist.has(p.userId);
                 if (relationship === 'Following') followButton = `<button id="follow-btn" class="secondary">Unfollow</button>`;
                else followButton = `<button id="follow-btn" class="primary">Follow</buttonif (isBlocked) return false;
                const isStory = p.isStory === true || String(p>`;

                actionButtonHTML = followButton;
                if (state.profileUser.profilePrivacy !== 'private.isStory).toUpperCase() === 'TRUE';
                if (isStory) return false;
                return true;
            });

            let postsToRender = [...validPosts];

            if (isMainFeed) {' || relationship === 'Friends') {
                    actionButtonHTML += ` <button id="message-user-btn
                if (state.currentFeedType === 'following') {
                    postsToRender = postsToRender." class="secondary">Message</button>`;
                }

                optionsMenuHTML = `
                    <div class="profile-options-menu">
                        <button class="options-btn" title="More options"><span classfilter(post => {
                        const isFollowed = state.currentUserFollowingList.includes(String(post.userId));
                        const isOwnPost = String(post.userId) === String(state.currentUser.userId);="material-symbols-rounded">more_vert</span></button>
                        <div class="options-menu hidden
                        return isFollowed || isOwnPost;
                    }).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                } else {
                    const now = new Date">
                            <button data-action="report-user" data-user-id="${state.profileUser.();
                    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60userId}">Report User</button>
                            <button class="block-btn" data-action="block-user * 60 * 1000);
                    const stories = []; const priorityPostsWithImage = []; const priorityPostsWithoutImage = [];" data-user-id="${state.profileUser.userId}">Block User</button>
                            ${state. const otherPosts = [];
                    postsToRender.forEach(post => {
                        const isFollowed = statecurrentUser.isAdmin ? `<button class="delete-btn" data-action="ban-user" data-user-.currentUserFollowingList.includes(String(post.userId));
                        const isOwnPost = String(post.id="${state.profileUser.userId}">🛡️ Ban User</button>` : ''}
                        </div>
                    </div>`;
            } else {
                actionButtonHTML = `<button id="edit-profile-btn" classuserId) === String(state.currentUser.userId);
                        const hasImage = (post.postContent || '').="secondary">Edit Profile</button>`;
            }

            const isPrivate = String(state.profileUser.includes('<img') || (post.postContent || '').includes('<video');
                        const postDate = new Date(post.timestamp); 
                        if ((isFollowed || isOwnPost) && postDate > twentyFourHoursAgo) { 
                            if (hasImage) priorityPostsWithImage.push(post);
                            elseprofilePrivacy).trim().toLowerCase() === 'private';
            const isAuthorized = isOwnProfile || state.profile priorityPostsWithoutImage.push(post); 
                        } else otherPosts.push(post); 
                    });
                    priorityPostsWithImage.sort((a, b) => new Date(b.timestamp) - newUser.relationship === 'Friends';

            const headerHTML = `
                <div class="profile-header">
                    ${optionsMenuHTML}
                    <div class="profile-grid">
                        <img src="${p Date(a.timestamp));
                    priorityPostsWithoutImage.sort((a, b) => new Date(bfpUrl}" class="pfp pfp-lg">
                        <div class="profile-info">
                            .timestamp) - new Date(a.timestamp));
                    postsToRender = [...stories, ...priorityPostsWith<div class="profile-username-options">
                                <span class="profile-username">@${sanitizeHTML(state.profileUser.username)}</span>
                            </div>
                            <div class="profile-actions-ig">${actionButtonHTML}</div>
                            ${!isPrivate || isAuthorized ? `
                            <div class="profile-Image, ...priorityPostsWithoutImage, ...otherPosts];
                }
            }

            if (!postsToRender || postsToRender.stats-ig" style="margin-top: 15px;">
                                <div class="stat"><span>${postCount}</span> Posts</div>
                                <div class="stat"><span>${state.profileUser.followers ||length === 0) {
                const message = isMainFeed && state.currentFeedType === 'following' 0}</span> Followers</div>
                                <div class="stat"><span>${state.profileUser.following || 
                    ? 'Posts from people you follow will appear here.'
                    : 'No posts to see here.';
0}</span> Following</div>
                            </div>` : ''}
                        </div>
                    </div>
                    <div class="profile-display-name-bio" style="padding: 0 16px;">
                        <div class                container.innerHTML = `<p style="text-align: center; color: var(--secondary-text-color="profile-display-name-ig">${sanitizeHTML(state.profileUser.displayName)} ${String(state.); margin-top: 40px;">${message}</p>`;
                return;
            }

            profileUser.isVerified).toUpperCase() === 'TRUE' ? VERIFIED_SVG : ''}</div>
                        <container.innerHTML = '';
            postsToRender.forEach(post => container.appendChild(this.createPostElementp class="profile-description-ig">${sanitizeHTML(state.profileUser.description || '')}</p>
                    </div>
                </div>`;

            document.getElementById('profile-content').innerHTML = headerHTML;

            if (isPrivate && !isAuthorized) {
                document.getElementById('profile-content').innerHTML += `
                    (post, { isDetailView: false })));
        },
        renderProfilePage() {
            if (!state.profileUser) return;
            const isBlockedLocally = state.localBlocklist.has(state.profileUser.userId);

            if (state.profileUser.isSuspended || state.profileUser<div class="private-profile-message">
                        <span class="material-symbols-rounded">lock</span>
                        <h3>This Account is Private</h3>
                        <p>Follow this account to see their photos and videos.</p.banDetails) {
                const pfpUrl = sanitizeHTML(state.profileUser.profilePictureUrl)>
                    </div>`;
                document.getElementById('profile-feed').innerHTML = '';
            } else {
 || `https://api.dicebear.com/8.x/thumbs/svg?seed=${state.profile                this.renderFeed(state.posts.filter(p => p.userId === state.profileUser.userIdUser.username}`;
                document.getElementById('profile-content').innerHTML = `
                    <div class="profile-header">
                        <img src="${pfpUrl}" class="pfp pfp-lg" style="), document.getElementById('profile-feed'), false);
                if (state.scrollToPostId) {
                    filter: grayscale(100%); cursor: default;">
                        <div class="display-name" style="const postIdToScroll = state.scrollToPostId;
                    setTimeout(() => {
                        const postElement = documentcolor: var(--secondary-text-color);">${sanitizeHTML(state.profileUser.displayName)}</div>
                        .querySelector(`#profile-feed .post[data-post-id="${postIdToScroll}"]`);
                        if (<div class="username" style="color: var(--secondary-text-color);">@${sanitizeHTML(state.profileUser.username)}</div>
                    </div>
                    <div class="private-profile-message">
                        postElement) {
                            postElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            postElement.style.transition = 'background-color 1s ease';
                            postElement.style<span class="material-symbols-rounded" style="color: var(--error-color);">block</span>
                        <h3>Account Suspended</h3>
                        <p>This account has been banned for violating our Terms of Service.</p>.backgroundColor = `var(--warning-color)4D`;
                            setTimeout(() => { postElement.style.
                    </div>`;
                document.getElementById('profile-feed').innerHTML = '';
                return;
            }backgroundColor = ''; }, 2500);
                        }
                    }, 200);
                    state

            if (isBlockedLocally) {
                document.getElementById('profile-content').innerHTML = `<p style="text-align:center; padding: 40px; color:var(--secondary-text-color.scrollToPostId = null;
                }
            }
        },
        formatPostContent(content));">You have blocked this user.</p>`;
                document.getElementById('profile-feed').innerHTML = '';
                 {
            if (!content) return '';
            return content
                .replace(/(href="|src=")?(https?:\/\return;
            }

            const isOwnProfile = state.currentUser?.userId === state.profileUser.userId;
            const pfpUrl = sanitizeHTML(state.profileUser.profilePictureUrl) || `https:///[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+)/g, (match, prefix, url) => {
                    if (prefix) return match; 
api.dicebear.com/8.x/thumbs/svg?seed=${state.profileUser.username}`;                    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
                })
                .replace(/(^|\s)#(\w+)/g, '$1<a href="#" class="hashtag-link" data-hashtag="$2">#$2</a>');
        },
        formatCommentContent(content
            const postCount = state.posts.filter(p => p.userId === state.profileUser.userId) {
            if (!content) return '';
            return content
                .replace(/(href="|src=")?).length;
            let actionButtonHTML = '';
            let optionsMenuHTML = '';

            if (!isOwnProfile) {
                const relationship = state.profileUser.relationship;
                let followButton = '';
                if (relationship === 'Friends') followButton = `<button id="follow-btn" class="secondary">Friends(https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&</button>`;
                else if (relationship === 'Following') followButton = `<button id="follow-btn"'()*+,;=%]+)/g, (match, prefix, url) => {
                    if (prefix) return match;
                    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a> class="secondary">Unfollow</button>`;
                else followButton = `<button id="follow-btn" class`;
                });
        },
        renderEditProfilePage() {
            document.getElementById('edit-pfp-url').value = state.currentUser.profilePictureUrl;
            document.getElementById('edit-display-name').value = state.currentUser.displayName;
            document.getElementById('edit-description').value = state.currentUser.description;
            const gallery = document.getElementById('pfp-choices-gallery');
            gallery.innerHTML = '';
            if(state.photoLibrary && state.photoLibrary.length > 0) {
                state.photoLibrary.forEach(url => {
                    const img = document.createElement('img');
                    ="primary">Follow</button>`;

                actionButtonHTML = followButton;
                if (state.profileUser.profilePrivacy !== 'private' || relationship === 'Friends') {
                    actionButtonHTML += ` <button id="message-user-btn" class="secondary">Message</button>`;
                }

                optionsMenuHTML = `
                    <div class="profile-options-menu">
                        <button class="options-btn" title="More options"><span class="material-symbols-rounded">more_vert</span></button>
                        <div class="options-menu hidden">
                            <button data-action="report-user" data-user-idimg.src = url; img.dataset.url = url;
                    if (state.currentUser.profilePicture="${state.profileUser.userId}">Report User</button>
                            <button class="block-btn" dataUrl === url) img.classList.add('selected');
                    gallery.appendChild(img);
                });
-action="block-user" data-user-id="${state.profileUser.userId}">Block User</button            } else gallery.innerHTML = '<p style="font-size:13px; color:var(--secondary>
                            ${state.currentUser.isAdmin ? `<button class="delete-btn" data-action="ban-user" data-user-id="${state.profileUser.userId}">🛡️ Ban User</button>` : ''}
                        </div>
                    </div>`;
            } else {
                actionButtonHTML = `<button id="edit-profile-btn" class="secondary">Edit Profile</button>`;
            }

            const isPrivate = String-text-color);">No avatars available.</p>';
        },
        createPostElement(post, options = {}) {
            const { showActions = true, showComments = true, isDetailView = false } = options(state.profileUser.profilePrivacy).trim().toLowerCase() === 'private';
            const isAuthorized = is;
            const postDiv = document.createElement('div');
            postDiv.className = 'post';
OwnProfile || state.profileUser.relationship === 'Friends';

            const headerHTML = `
                <div            postDiv.dataset.postId = post.postId;
            postDiv.dataset.userId = post.userId class="profile-header">
                    ${optionsMenuHTML}
                    <div class="profile-grid">
                        <img src="${pfpUrl}" class="pfp pfp-lg">
                        <div class=";

            const isLiked = post.likes.some(like => like.userId === state.currentUser.userIdprofile-info">
                            <div class="profile-username-options">
                                <span class="profile-);
            const isAuthor = post.userId === state.currentUser.userId;
            const isAdmin = state.username">@${sanitizeHTML(state.profileUser.username)}</span>
                            </div>
                            <div class="currentUser.isAdmin;
            const pfpUrl = sanitizeHTML(post.profilePictureUrl) || `https://profile-actions-ig">${actionButtonHTML}</div>
                            ${!isPrivate || isAuthorized ? `
                            api.dicebear.com/8.x/thumbs/svg?seed=${post.username}`;

            let<div class="profile-stats-ig" style="margin-top: 15px;">
                                < authorSpecificButtons = '';
            if (isAuthor) {
                authorSpecificButtons = `<button class="edit-btn" data-action="edit-post">Edit Post</button><button class="delete-btn" data-action="delete-post">Delete Post</button>`;
            } else {
                authorSpecificButtons = `<button data-action="report-post">Report Post</button><button class="block-btn" data-actiondiv class="stat"><span>${postCount}</span> Posts</div>
                                <div class="stat"><span>${state="block-user" data-user-id="${post.userId}">Block User</button>`;
                if (.profileUser.followers || 0}</span> Followers</div>
                                <div class="stat"><span>${state.profileUser.following || 0}</span> Following</div>
                            </div>` : ''}
                        </div>
                    </div>isAdmin) {
                    authorSpecificButtons += `<button class="delete-btn" data-action="delete-post">🛡️ Delete Post️</button>`;
                    authorSpecificButtons += `<button class="delete-btn" data
                    <div class="profile-display-name-bio" style="padding: 0 16px;">
                        <div class="profile-display-name-ig">${sanitizeHTML(state.profileUser.displayName-action="ban-user" data-user-id="${post.userId}">🛡️ Ban User️</button>`;
                }
            }

            const optionsMenuHTML = `<div class="post-options"><button class)} ${String(state.profileUser.isVerified).toUpperCase() === 'TRUE' ? VERIFIED_SVG :="options-btn" title="More options"><span class="material-symbols-rounded">more_vert</span></ ''}</div>
                        <p class="profile-description-ig">${sanitizeHTML(state.profileUser.descriptionbutton><div class="options-menu hidden">${authorSpecificButtons}</div></div>`;
            const pendingImage = state || '')}</p>
                    </div>
                </div>`;

            document.getElementById('profile-content').innerHTML =.pendingCommentImages[post.postId];
            const pendingImageHTML = pendingImage ? `<div class="comment headerHTML;

            if (isPrivate && !isAuthorized) {
                document.getElementById('profile-content-preview-area"><img src="${pendingImage}" class="comment-preview-image"><button class="remove-').innerHTML += `
                    <div class="private-profile-message">
                        <span class="material-img-btn" style="align-self: flex-start; margin-left: 5px;" data-symbols-rounded">lock</span>
                        <h3>This Account is Private</h3>
                        <p>Follow this account to seeaction="remove-comment-image" data-post-id="${post.postId}">&times;</button></div> their photos and videos.</p>
                    </div>`;
                document.getElementById('profile-feed').innerHTML = '';` : '';
            const draftText = state.pendingCommentDrafts[post.postId] || '';

            let commentsToRender = [...post.comments].reverse();
            let viewAllBtnHTML = '';
            if
            } else {
                this.renderFeed(state.posts.filter(p => p.userId === state.profileUser.userId), document.getElementById('profile-feed'), false);
                if (state.scrollTo (!isDetailView && commentsToRender.length > 3) {
                const totalComments = commentsToRenderPostId) {
                    const postIdToScroll = state.scrollToPostId;
                    setTimeout(() => {
                        const postElement = document.querySelector(`#profile-feed .post[data-post-id="${postIdToScroll.length;
                commentsToRender = commentsToRender.slice(0, 3); 
                view}"]`);
                        if (postElement) {
                            postElement.scrollIntoView({ behavior: 'smooth',AllBtnHTML = `<button class="view-all-comments-btn" data-action="view-post" block: 'center' });
                            postElement.style.transition = 'background-color 1s ease';
                            postElement.style.backgroundColor = `var(--warning-color)4D`;
                            setTimeout(() => { postElement.style.backgroundColor = ''; }, 2500);
                        }
                    }, 2 data-post-id="${post.postId}">View all ${totalComments} comments</button>`;
            }
            const isStory = post.isStory === true || String(post.isStory).toUpperCase() === 'TRUE00);
                    state.scrollToPostId = null;
                }
            }
        },
        formatPostContent(content) {
            if (!content) return '';
            return content
                .replace(/(';

            postDiv.innerHTML = `
                <div class="post-header"><img src="${pfphref="|src=")?(https?:\/\/[a-zA-Z0-9\-._~:/?Url}" class="pfp pfp-sm"><div class="post-header-info"><span class="post#[\]@!$&'()*+,;=%]+)/g, (match, prefix, url) => {
                    if (prefix) return match; 
                    return `<a href="${url}" target="_blank" rel="-display-name">${sanitizeHTML(post.displayName)} ${String(post.isVerified).toUpperCase() === 'TRUE' ? VERIFIED_SVG : ''}</span><span class="post-timestamp" data-timestamp="${isnoopener noreferrer">${url}</a>`;
                })
                .replace(/(^|\s)#(\w+)/gStory ? post.expiryTimestamp : post.timestamp}" data-is-story="${isStory}">${formatTimestamp(post, '$1<a href="#" class="hashtag-link" data-hashtag="$2">#$2</a>');)}</span></div>${optionsMenuHTML}</div>
                <div class="post-content"></div>
                ${show
        },
        formatCommentContent(content) {
            if (!content) return '';
            return contentActions ? `<div class="post-actions"><button class="like-btn ${isLiked ? 'liked' : ''}"><span class="material-symbols-rounded">favorite</span></button><span class="like-count">${
                .replace(/(href="|src=")?(https?:\/\/[a-zA-Z0-9post.likes.length} likes</span></div>` : ''}
                ${showComments ? `<div class="comments\-._~:/?#[\]@!$&'()*+,;=%]+)/g, (match, prefix, url) => {
                    if (prefix) return match;
                    return `<a href="${url}" target="_-section"><div class="comments-list">${commentsToRender.map(c => this.createCommentElement(c)).join('')}${viewAllBtnHTML}</div><div class="comment-form-container">${pendingImageHTML}<form class="comment-form"><input type="text" value="${sanitizeHTML(draftText)}" placeholder="Addblank" rel="noopener noreferrer">${url}</a>`;
                });
        },
        renderEditProfilePage() {
            document.getElementById('edit-pfp-url').value = state.currentUser.profilePictureUrl; a comment..."><button type="button" class="comment-image-btn" title="Add Image" data-action="add-comment-image" data-post-id="${post.postId}"><span class="material-symbols-rounded">add_photo_alternate</span></button><button type="submit" class="comment-submit-
            document.getElementById('edit-display-name').value = state.currentUser.displayName;
            document.getElementById('edit-description').value = state.currentUser.description;
            const gallery = document.getElementById('pfp-choices-gallery');
            gallery.innerHTML = '';
            if(state.photoLibrary && state.btn" title="Post Comment"><span class="material-symbols-rounded">send</span></button></form></div></div>` : ''}`;

            const postContentEl = postDiv.querySelector('.post-content');
            postContentEl.innerHTML = this.formatPostContent(post.postContent);
            postContentEl.addEventListener('click', (e) => {
                if (e.target.tagName === 'A') return;
                photoLibrary.length > 0) {
                state.photoLibrary.forEach(url => {
                    const img = document.createElement('img');
                    img.src = url; img.dataset.url = url;handlers.showPostDetail(post.postId);
            });
            return postDiv;
        },
        createCommentElement(comment) {
            const isAuthor = comment.userId === state.currentUser.userId;

                    if (state.currentUser.profilePictureUrl === url) img.classList.add('selected');
                    gallery.appendChild(img);
                });
            } else gallery.innerHTML = '<p style="font-size            const isAdmin = state.currentUser.isAdmin;
            const pfpUrl = sanitizeHTML(comment.profilePictureUrl) || `https://api.dicebear.com/8.x/thumbs/svg?seed=${comment:13px; color:var(--secondary-text-color);">No avatars available.</p>';
        },
        createPostElement(post, options = {}) {
            const { showActions = true, showComments =.displayName}`;
            const optionsMenuHTML = (isAuthor || isAdmin) ? `<div class="post-options"><button class="options-btn" title="More options"><span class="material-symbols-rounded">more_ true, isDetailView = false } = options;
            const postDiv = document.createElement('div');
vert</span></button><div class="options-menu hidden"><button class="delete-btn" data-action="            postDiv.className = 'post';
            postDiv.dataset.postId = post.postId;
            postDiv.dataset.userId = post.userId;

            const isLiked = post.likes.some(likedelete-comment">Delete Comment</button></div></div>` : '';
            return `<div class="comment" data-comment-id="${comment.commentId}" data-user-id="${comment.userId}"><div class=" => like.userId === state.currentUser.userId);
            const isAuthor = post.userId === state.currentUser.userId;
            const isAdmin = state.currentUser.isAdmin;
            const pfpUrl = sanitizeHTML(comment-header"><div class="comment-header-main" data-user-id="${comment.userId}"><post.profilePictureUrl) || `https://api.dicebear.com/8.x/thumbs/svgimg src="${pfpUrl}" class="pfp"><div><a class="comment-author">${sanitizeHTML(comment.displayName)} ${String(comment.isVerified).toUpperCase() === 'TRUE' ? VERIFIED_SVG :?seed=${post.username}`;

            let authorSpecificButtons = '';
            if (isAuthor) {
 ''}</a><span class="comment-timestamp">${formatTimestamp({ timestamp: comment.timestamp })}</span></div></div>${                authorSpecificButtons = `<button class="edit-btn" data-action="edit-post">Edit Post</optionsMenuHTML}</div><div class="comment-text">${this.formatCommentContent(comment.commentText)}button><button class="delete-btn" data-action="delete-post">Delete Post</button>`;
            </div></div>`;
        },
        renderSearchView() {
            const resultsContainer = document.getElementById('search-results');
            if (state.search.isLoading) {
                resultsContainer.innerHTML = '<p style="} else {
                authorSpecificButtons = `<button data-action="report-post">Report Post</button><button class="block-btn" data-action="block-user" data-user-id="${post.userIdtext-align:center; color: var(--secondary-text-color);">Searching...</p>';
                return;
            }
            if (state.search.results) {
                this.renderSearchResults(state.search}">Block User</button>`;
                if (isAdmin) {
                    authorSpecificButtons += `<button class="delete-btn" data-action="delete-post">🛡️ Delete Post️</button>`;
                    authorSpecificButtons.results);
            } else {
                resultsContainer.innerHTML = '<p style="text-align:center += `<button class="delete-btn" data-action="ban-user" data-user-id="${post.userId}">🛡️ Ban User️</button>`;
                }
            }

            const optionsMenuHTML =; color: var(--secondary-text-color);">Search for users and posts.</p>';
            }
        },
        renderSearchResults(results) {
            const container = document.getElementById('search-results');
            if (!results.users.length && !results.posts.length) {
                container.innerHTML = '<p `<div class="post-options"><button class="options-btn" title="More options"><span class="material-symbols-rounded">more_vert</span></button><div class="options-menu hidden">${authorSpecificButtons} style="text-align:center; color: var(--secondary-text-color);">No results found.</p>';
                return;
            }
            container.innerHTML = `${results.users.length ? `<h3>Users</h3><div id="search-results-users-list"></div>` : ''}${results.posts.length ? `<h3>Posts</h3><div id="search-results-posts-list"></div>` : ''}`;
            if (results.users.length) {
                const usersList = document.getElementById('search-results-users-list');
                results.users.forEach(user => {
                    const userEl = document.createElement('div');</div></div>`;
            const pendingImage = state.pendingCommentImages[post.postId];
            const pendingImage
                    userEl.className = 'search-result-user'; userEl.dataset.userId = user.userIdHTML = pendingImage ? `<div class="comment-preview-area"><img src="${pendingImage}" class="comment;
                    const pfpUrl = sanitizeHTML(user.profilePictureUrl) || `https://api.dicebear.com/8.x/thumbs/svg?seed=${user.username}`;
                    userEl.innerHTML-preview-image"><button class="remove-img-btn" style="align-self: flex-start; margin-left: 5px;" data-action="remove-comment-image" data-post-id="${ = `<img src="${pfpUrl}" class="pfp pfp-sm"><div><div>${sanitizeHTML(post.postId}">&times;</button></div>` : '';
            const draftText = state.pendingCommentDraftuser.displayName)} ${String(user.isVerified).toUpperCase() === 'TRUE' ? VERIFIED_SVG : ''}</div><div style="color:var(--secondary-text-color)">@${sanitizeHTML(user.s[post.postId] || '';

            let commentsToRender = [...post.comments].reverse();
            let viewAllBtnHTML = '';
            if (!isDetailView && commentsToRender.length > 3) {
                const totalComments = commentsToRender.length;
                commentsToRender = commentsToRender.sliceusername)}</div></div>`;
                    usersList.appendChild(userEl);
                });
            }
            if(0, 3); 
                viewAllBtnHTML = `<button class="view-all-comments- (results.posts.length) {
                const postsList = document.getElementById('search-results-posts-list');
                results.posts.forEach(post => {
                    const fullPostObject = { ...state.btn" data-action="view-post" data-post-id="${post.postId}">View all ${totalComments} comments</button>`;
            }
            const isStory = post.isStory === true || String(post.isStory).toUpperCase() === 'TRUE';

            postDiv.innerHTML = `
                <div class="post-header"><img src="${pfpUrl}" class="pfp pfp-sm"><div class="post-header-info"><span class="post-display-name">${sanitizeHTML(post.displayName)} ${StringuserProfileCache[post.userId], ...post, likes: [], comments: [] };
                    postsList.appendChild(this.createPostElement(fullPostObject, { showActions: false, showComments: false }));
                });
            }
        },
        renderNotifications() { const container = document.getElementById('notifications-list');(post.isVerified).toUpperCase() === 'TRUE' ? VERIFIED_SVG : ''}</span><span class="post-timestamp" data-timestamp="${isStory ? post.expiryTimestamp : post.timestamp}" data-is if (state.notifications.length === 0) { container.innerHTML = '<p style="text-align:-story="${isStory}">${formatTimestamp(post)}</span></div>${optionsMenuHTML}</div>
                <div class="post-content"></div>
                ${showActions ? `<div class="post-actions"><button class="like center; color: var(--secondary-text-color); padding: 20px 0;">No new notifications-btn ${isLiked ? 'liked' : ''}"><span class="material-symbols-rounded">favorite</span>.</p>'; return; } container.innerHTML = ''; state.notifications.forEach(n => { const item = document</button><span class="like-count">${post.likes.length} likes</span></div>` : ''}
.createElement('div'); item.className = 'notification-item'; item.dataset.notificationId = n.notificationId; item.dataset.actorId = n.actorUserId; item.dataset.postId = n.postId;                ${showComments ? `<div class="comments-section"><div class="comments-list">${commentsToRender.map(c => this.createCommentElement(c)).join('')}${viewAllBtnHTML}</div><div class="comment-form-container">${pendingImageHTML}<form class="comment-form"><input type="text" value let text = ''; switch (n.actionType) { case 'like': text = 'liked your post.'; break="${sanitizeHTML(draftText)}" placeholder="Add a comment..."><button type="button" class="comment-image-btn" title="Add Image" data-action="add-comment-image" data-post-id="${post.postId}"><span class="material-symbols-rounded">add_photo_alternate</span></button><button; case 'comment': text = 'commented on your post.'; break; case 'follow': text = 'started type="submit" class="comment-submit-btn" title="Post Comment"><span class="material-symbols-rounded">send</span></button></form></div></div>` : ''}`;

            const postContentEl = postDiv following you.'; break; } const pfpUrl = sanitizeHTML(n.actorProfilePictureUrl) || `https.querySelector('.post-content');
            postContentEl.innerHTML = this.formatPostContent(post.postContent);
            postContentEl.addEventListener('click', (e) => {
                if (e.target.tagName === 'A') return;
                handlers.showPostDetail(post.postId);
            });
            return postDiv;
        },
        createCommentElement(comment) {
            const isAuthor = comment.userId === state.currentUser.userId;
            const isAdmin = state.currentUser.isAdmin;
            const p://api.dicebear.com/8.x/thumbs/svg?seed=${n.actorDisplayName}`; item.innerHTML = ` <div class="notification-item-clickable" style="display: flex; align-items: center; gap: 12px; flex-grow: 1;"> <img src="${pfpUrl}" class="pfp pfp-sm"> <div class="notification-text"> <span class="username">${sanitizefpUrl = sanitizeHTML(comment.profilePictureUrl) || `https://api.dicebear.com/8.x/thumbs/svg?seed=${comment.displayName}`;
            const optionsMenuHTML = (isAuthor ||HTML(n.actorDisplayName)}</span> ${text} <div class="notification-timestamp">${formatTimestamp({ timestamp: isAdmin) ? `<div class="post-options"><button class="options-btn" title="More options"><span n.timestamp })}</div> </div> </div> <button class="delete-btn delete-notification-btn" title="Delete Notification"><span class="material-symbols-rounded">close</span></button> `; container.appendChild(item); class="material-symbols-rounded">more_vert</span></button><div class="options-menu hidden"><button }); },
        renderImagePreview() { 
            const container = document.getElementById('post-image-preview class="delete-btn" data-action="delete-comment">Delete Comment</button></div></div>` : '';-container'); 
            if (state.postImageUrl) { 
                container.innerHTML = `<img id
            return `<div class="comment" data-comment-id="${comment.commentId}" data-user-="post-image-preview" src="${sanitizeHTML(state.postImageUrl)}" alt="Image Preview"><button id="remove-image-btn" title="Remove Media">&times;</button>`; 
                container.classList.removeid="${comment.userId}"><div class="comment-header"><div class="comment-header-main" data('hidden'); 
            } else if (state.postVideoUrl) {
                container.innerHTML = `<-user-id="${comment.userId}"><img src="${pfpUrl}" class="pfp"><div><video id="post-video-preview" src="${sanitizeHTML(state.postVideoUrl)}" controls playsinline></a class="comment-author">${sanitizeHTML(comment.displayName)} ${String(comment.isVerified).toUpperCase()video><button id="remove-image-btn" title="Remove Media">&times;</button>`; 
                container === 'TRUE' ? VERIFIED_SVG : ''}</a><span class="comment-timestamp">${formatTimestamp({.classList.remove('hidden'); 
            } else { container.innerHTML = ''; container.classList.add(' timestamp: comment.timestamp })}</span></div></div>${optionsMenuHTML}</div><div class="comment-text">${this.formatCommentContent(comment.commentText)}</div></div>`;
        },
        renderSearchView() {
            const resultsContainer = document.getElementById('search-results');
            if (state.search.isLoading) {
hidden'); } 
        },
        showFeedSkeleton(container) { const skeletonHTML = Array(3).fill().map(() => `<div class="post skeleton"><div class="post-header"><div class="pfp                resultsContainer.innerHTML = '<p style="text-align:center; color: var(--secondary-text-color);">Searching...</p>';
                return;
            }
            if (state.search.results) { pfp-sm"></div><div class="post-display-name"></div></div><div class="post-content"></div></div>`).join(''); container.innerHTML = skeletonHTML; },
        showProfileSkeleton() { document.
                this.renderSearchResults(state.search.results);
            } else {
                resultsContainer.innerHTMLgetElementById('profile-content').innerHTML = ` <div class="profile-header skeleton"> <div class="profile-grid"> <div class="pfp pfp-lg"></div> <div class="profile-info"> <div = '<p style="text-align:center; color: var(--secondary-text-color);">Search for users and posts.</p>';
            }
        },
        renderSearchResults(results) {
            const container = class="profile-username" style="width: 60%; height: 28px; margin-bottom: 15px; border-radius: 4px;"></div> <div class="profile-actions-ig document.getElementById('search-results');
            if (!results.users.length && !results.posts.length) {
                container.innerHTML = '<p style="text-align:center; color: var(--secondary-" style="display: flex; gap: 8px; flex-wrap: wrap;"><div style="width: 100%; height: 32px; background-color: var(--border-color); border-radius: 10px;"></div></div> <div class="profile-stats-ig" style="margin-toptext-color);">No results found.</p>';
                return;
            }
            container.innerHTML = `${results.users.length ? `<h3>Users</h3><div id="search-results-users-list"></div>: 15px; display: flex; gap: 40px;"><div class="stat" style="` : ''}${results.posts.length ? `<h3>Posts</h3><div id="search-results-posts-list"></div>` : ''}`;
            if (results.users.length) {
                const usersList = documentwidth: 30%; height: 32px;"></div><div class="stat" style="width: 30%; height: 32px;"></div><div class="stat" style="width: 3.getElementById('search-results-users-list');
                results.users.forEach(user => {
                    const userEl = document.createElement('div');
                    userEl.className = 'search-result-user';0%; height: 32px;"></div></div> </div> </div> <div class="profile-display-name-bio" style="padding: 0 16px;"> <div class="profile-display-name- userEl.dataset.userId = user.userId;
                    const pfpUrl = sanitizeHTML(user.profileig" style="width: 40%; height: 20px; margin-bottom: 5px; border-radius: 4px;"></div> <div class="profile-description-ig" style="width:PictureUrl) || `https://api.dicebear.com/8.x/thumbs/svg?seed=${user.username}`;
                    userEl.innerHTML = `<img src="${pfpUrl}" class="pfp p 80%; height: 48px; border-radius: 4px;"></div> </div> </div>fp-sm"><div><div>${sanitizeHTML(user.displayName)} ${String(user.isVerified).toUpperCase() === 'TRUE' ? VERIFIED_SVG : ''}</div><div style="color:var(--secondary-text`; this.showFeedSkeleton(document.getElementById('profile-feed')); },
        toggleModal(modalName, show, position = null) {
            const modal = modals[modalName];
            if (!modal) return;
            modal.classList.toggle('hidden', !show);
            const modalContent = modal.querySelector('.-color)">@${sanitizeHTML(user.username)}</div></div>`;
                    usersList.appendChild(userEl);
                });
            }
            if (results.posts.length) {
                const postsList =modal-content');
            if (modalContent) { 
                if (show && position) { 
                    if (position.top !== undefined) modalContent.style.top = `${position.top}px`;
 document.getElementById('search-results-posts-list');
                results.posts.forEach(post => {
                    const fullPostObject = { ...state.userProfileCache[post.userId], ...post, likes: [], comments: [] };
                    postsList.appendChild(this.createPostElement(fullPostObject, { showActions                    if (position.bottom !== undefined) modalContent.style.bottom = `${position.bottom}px`;
                    if (position.left !== undefined) modalContent.style.left = `${position.left}px`;
: false, showComments: false }));
                });
            }
        },
        renderNotifications() { const                    if (position.right !== undefined) modalContent.style.right = `${position.right}px`;
 container = document.getElementById('notifications-list'); if (state.notifications.length === 0) { container.                } else if (!show) modalContent.removeAttribute('style'); 
            }
            if (show === false && modalName === 'report') { state.reporting = { userId: null, postId: null }; document.innerHTML = '<p style="text-align: center; color: var(--secondary-text-color); padding: 20px 0;">No new notifications.</p>'; return; } container.innerHTML = ''; state.notificationsgetElementById('report-reason-input').value = ''; }
            if (show === true && modalName === 'imageUrl') {
                const libraryContainer = document.getElementById('photo-library-grid');
                libraryContainer..forEach(n => { const item = document.createElement('div'); item.className = 'notification-item';innerHTML = '';
                if (state.photoLibrary && state.photoLibrary.length > 0) {
 item.dataset.notificationId = n.notificationId; item.dataset.actorId = n.actorUserId; item.dataset.postId = n.postId; let text = ''; switch (n.actionType) { case '                    state.photoLibrary.forEach(url => {
                        const img = document.createElement('img');
                        img.src = url; img.className = 'library-photo';
                        img.onclick = () => {like': text = 'liked your post.'; break; case 'comment': text = 'commented on your post.'; break; case 'follow': text = 'started following you.'; break; } const pfpUrl = sanitizeHTML(n.actorProfilePictureUrl) || `https://api.dicebear.com/8.x/thumbs/
                            if (state.pendingCommentImagePostId) {
                                state.pendingCommentImages[state.pendingCommentImagePostId] = url;
                                state.pendingCommentImagePostId = null;
                                ui.svg?seed=${n.actorDisplayName}`; item.innerHTML = ` <div class="notification-item-clickable" style="display: flex; align-items: center; gap: 12px; flex-grow: render(); 
                            } else {
                                state.postImageUrl = url;
                                state.postVideoUrl = null; 
                                ui.renderImagePreview(); 
                            }
                            ui.toggleModal('imageUrl1;"> <img src="${pfpUrl}" class="pfp pfp-sm"> <div class="notification-text"> <span class="username">${sanitizeHTML(n.actorDisplayName)}</span> ${text} <div class', false);
                        };
                        libraryContainer.appendChild(img);
                    });
                } else libraryContainer.innerHTML = '<p style="font-size:13px; color:var(--secondary-text-color="notification-timestamp">${formatTimestamp({ timestamp: n.timestamp })}</div> </div> </div> <button class="delete); padding:10px;">No photos available.</p>';
            }
        },
        renderProfileShortcut-btn delete-notification-btn" title="Delete Notification"><span class="material-symbols-rounded">close</span>Modal() {
            const user = state.currentUser;
            if (!user) return;
            const modalContent = modals.profileShortcut.querySelector('.modal-content');
            modalContent.innerHTML = `<button data-</button> `; container.appendChild(item); }); },
        renderImagePreview() { 
            const containeraction="go-to-profile" data-user-id="${user.userId}"><span class="material-symbols-rounded">account_circle</span>View Profile</button><button data-action="go-to-settings">< = document.getElementById('post-image-preview-container'); 
            if (state.postImageUrl) {span class="material-symbols-rounded">settings</span>Settings</button>`;
        },
        renderSettingsPage() 
                container.innerHTML = `<img id="post-image-preview" src="${sanitizeHTML(state. {
            const user = state.currentUser;
            const pfpUrl = sanitizeHTML(user.profilePictureUrl) || `https://api.dicebear.com/8.x/thumbs/svg?seed=${user.username}`;
            const isVerified = String(user.isVerified).toUpperCase() === 'TRUE';
            postImageUrl)}" alt="Image Preview"><button id="remove-image-btn" title="Remove Media">&times;</button>`; 
                container.classList.remove('hidden'); 
            } else if (state.postVideodocument.getElementById('settings-user-info-row').innerHTML = `<a id="settings-profile-link" data-user-id="${user.userId}" style="display: flex; align-items: center; gap:Url) {
                container.innerHTML = `<video id="post-video-preview" src="${sanitizeHTML(state.postVideoUrl)}" controls playsinline></video><button id="remove-image-btn" title="Remove Media">&times;</button>`; 
                container.classList.remove('hidden'); 
            } else { container 12px; text-decoration: none; color: inherit; flex-grow: 1; cursor:.innerHTML = ''; container.classList.add('hidden'); } 
        },
        showFeedSkeleton(container) { const skeletonHTML = Array(3).fill().map(() => `<div class="post skeleton"><div class="post-header"><div class="pfp pfp-sm"></div><div class="post-display-name"></div></div><div class="post-content"></div></div>`).join(''); container.innerHTML = skeletonHTML; pointer;"><img src="${pfpUrl}" class="pfp pfp-sm"><div class="user-info"><div class="display-name">${sanitizeHTML(user.displayName)} ${isVerified ? VERIFIED_SVG : },
        showProfileSkeleton() { document.getElementById('profile-content').innerHTML = ` <div class="profile ''}</div><div class="username">@${sanitizeHTML(user.username)}</div></div></a>`;
            document.getElementById('post-visibility-select').value = state.currentUser.postVisibility || 'Everyone';
            -header skeleton"> <div class="profile-grid"> <div class="pfp pfp-lg"></div> <div class="profile-info"> <div class="profile-username" style="width: 60%;document.getElementById('privacy-switch').checked = state.currentUser.profilePrivacy === 'private';
            const blocked height: 28px; margin-bottom: 15px; border-radius: 4px;"></div> <div class="profile-actions-ig" style="display: flex; gap: 8px; flexListContainer = document.getElementById('blocked-users-list');
            const allBlockedIds = new Set([...state-wrap: wrap;"><div style="width: 100%; height: 32px; background-color: var(--border-color); border-radius: 10px;"></div></div> <div class="profile.blockedUsersList.map(u => u.userId), ...state.localBlocklist]);
            const allBlockedUsers = [];
            allBlockedIds.forEach(blockedId => {
                const existing = state.blocked-stats-ig" style="margin-top: 15px; display: flex; gap: 40px;"><div class="stat" style="width: 30%; height: 32px;"></div>UsersList.find(u => u.userId === blockedId);
                if (existing) allBlockedUsers.push(existing);
                else {
                    const cached = state.userProfileCache[blockedId] || state<div class="stat" style="width: 30%; height: 32px;"></div><div.posts.find(p => p.userId === blockedId);
                    if (cached) allBlockedUsers.push({ userId: blockedId, displayName: cached.displayName || 'User', profilePictureUrl: cached.profilePictureUrl || '' });
                    else allBlockedUsers.push({ userId: blockedId, displayName: 'Unknown User', class="stat" style="width: 30%; height: 32px;"></div></div> </div> </div> <div class="profile-display-name-bio" style="padding: 0 16px;"> profilePictureUrl: '' });
                }
            });
            if (allBlockedUsers.length > 0) {
                blockedListContainer.innerHTML = allBlockedUsers.map(blockedUser => {
                    const p <div class="profile-display-name-ig" style="width: 40%; height: 20px; margin-bottom: 5px; border-radius: 4px;"></div> <div class="profile-description-ig" style="width: 80%; height: 48px; border-radius: 4px;"></div> </div> </div>`; this.showFeedSkeleton(document.getElementById('profile-feedfp = sanitizeHTML(blockedUser.profilePictureUrl) || `https://api.dicebear.com/8.x/thumbs/svg?seed=${blockedUser.displayName}`;
                    return `<div class="blocked-user')); },
        toggleModal(modalName, show, position = null) {
            const modal = modals[-row setting-row"><img src="${pfp}" class="pfp pfp-sm" style="cursor:default;"><span class="blocked-user-info">${sanitizeHTML(blockedUser.displayName)}</span><button class="secondary unblock-btnmodalName];
            if (!modal) return;
            modal.classList.toggle('hidden', !show);
            const modalContent = modal.querySelector('.modal-content');
            if (modalContent) { 
" data-action="unblock-user" data-user-id="${blockedUser.userId}">Unblock</button></div>`;
                }).join('');
            } else blockedListContainer.innerHTML = '<p style="color                if (show && position) { 
                    if (position.top !== undefined) modalContent.style.: var(--secondary-text-color); font-size: 14px; padding: 8px top = `${position.top}px`;
                    if (position.bottom !== undefined) modalContent.style.bottom = `${position.bottom}px`;
                    if (position.left !== undefined) modalContent.style.0;">You haven\'t blocked anyone.</p>';
        },
        showError(elId, msg) { const el = document.getElementById(elId); el.textContent = msg; el.classList.remove('hiddenleft = `${position.left}px`;
                    if (position.right !== undefined) modalContent.style.right = `${position.right}px`;
                } else if (!show) modalContent.removeAttribute('style'); 
            }
            if (show === false && modalName === 'report') { state.reporting = {'); },
        hideError(elId) { document.getElementById(elId).classList.add('hidden'); },
        setButtonState(btnId, text, disabled) { const btn = document.getElementById(btnId); if (btn) { btn.textContent = text; btn.disabled = disabled; } },
        renderMessages userId: null, postId: null }; document.getElementById('report-reason-input').value = ''; }
            Page() { this.renderConversationsList(); if (state.currentConversation.id) { this.renderConversationif (show === true && modalName === 'imageUrl') {
                const libraryContainer = document.getElementById('photo-library-grid');
                libraryContainer.innerHTML = '';
                if (state.photoLibrary && state.photoLibrary.length > 0) {
                    state.photoLibrary.forEach(url => {
                        constHistory(); } else { document.getElementById('conversation-view').innerHTML = ` <div id="conversation-placeholder"> <span class="material-symbols-rounded">chat</span> <h3>Your Messages</h3> <p>Select a conversation or img = document.createElement('img');
                        img.src = url; img.className = 'library-photo';
                        img.onclick = () => {
                            if (state.pendingCommentImagePostId) {
 start a new one.</p> </div>`; } },
        renderConversationsList() { const container = document.getElementById('conversations-list'); let headerHTML = `<div id="conversations-list-header"><h3>                                state.pendingCommentImages[state.pendingCommentImagePostId] = url;
                                state.pendingCommentMessages</h3></div>`; let listHTML = ''; if (state.conversations.length === 0) { listHTMLImagePostId = null;
                                ui.render(); 
                            } else {
                                state.postImageUrl = url;
                                state.postVideoUrl = null; 
                                ui.renderImagePreview(); 
                            }
                            ui.toggleModal('imageUrl', false);
                        };
                        libraryContainer.appendChild(img = '<p style="text-align: center; color: var(--secondary-text-color); padding: 15px;">No conversations yet.</p>'; } else { listHTML = state.conversations.map(convo => { const isActive = convo.otherUser.userId === state.currentConversation.id; const pfp =);
                    });
                } else libraryContainer.innerHTML = '<p style="font-size:13px sanitizeHTML(convo.otherUser.profilePictureUrl) || `https://api.dicebear.com/; color:var(--secondary-text-color); padding:10px;">No photos available.</p>';
8.x/thumbs/svg?seed=${convo.otherUser.displayName}`; return ` <div class="conversation-item ${isActive ? 'active' : ''}" data-user-id="${convo.otherUser.            }
        },
        renderProfileShortcutModal() {
            const user = state.currentUser;
            userId}" data-is-group="${convo.otherUser.isGroup || false}"> <img src="${pif (!user) return;
            const modalContent = modals.profileShortcut.querySelector('.modal-content');
            modalContent.innerHTML = `<button data-action="go-to-profile" data-user-id="${fp}" class="pfp pfp-sm"> <div class="convo-details"> <div class="user.userId}"><span class="material-symbols-rounded">account_circle</span>View Profile</button><buttonusername">${sanitizeHTML(convo.otherUser.displayName)}</div> <div class="last-message">${sanitizeHTML(convo.lastMessage)}</div> </div> ${convo.unreadCount > 0 ? '<div class="unread-dot"></div>' : ''} </div> `; }).join(''); } container.innerHTML = headerHTML + `< data-action="go-to-settings"><span class="material-symbols-rounded">settings</span>Settings</button>`;
        },
        renderSettingsPage() {
            const user = state.currentUser;
            const pfpUrl = sanitizeHTML(user.profilePictureUrl) || `https://api.dicebear.com/8.x/thumbs/svg?seed=${user.username}`;
            const isVerified = String(user.isdiv id="conversations-list-body">${listHTML}</div>`; },
        renderConversationHistory() {
            const conversationView = document.getElementById('conversation-view');
            const otherUser = state.conversations.Verified).toUpperCase() === 'TRUE';
            document.getElementById('settings-user-info-row').innerHTML =find(c => c.otherUser.userId === state.currentConversation.id)?.otherUser;
            
 `<a id="settings-profile-link" data-user-id="${user.userId}" style="display: flex; align-items: center; gap: 12px; text-decoration: none; color: inherit; flex-grow: 1; cursor: pointer;"><img src="${pfpUrl}" class="pfp p            if (!otherUser) { 
                conversationView.innerHTML = `<div id="conversation-placeholder"><pfp-sm"><div class="user-info"><div class="display-name">${sanitizeHTML(user.displayName)} ${isVerified ? VERIFIED_SVG : ''}</div><div class="username">@${sanitizeHTML(user.username)}</div></div></a>>Could not load conversation.</p></div>`; 
                return; 
            }

            const pfp`;
            document.getElementById('post-visibility-select').value = state.currentUser.postVisibility || 'Everyone = sanitizeHTML(otherUser.profilePictureUrl) || `https://api.dicebear.com/8.';
            document.getElementById('privacy-switch').checked = state.currentUser.profilePrivacy === 'private';
x/thumbs/svg?seed=${otherUser.displayName}`;
            const profileLinkContent = `<img src="${            const blockedListContainer = document.getElementById('blocked-users-list');
            const allBlockedIds = new Set([...state.blockedUsersList.map(u => u.userId), ...state.localBlocklist]);
pfp}" class="pfp pfp-sm"> <span>${sanitizeHTML(otherUser.displayName)} ${!otherUser.isGroup && String(otherUser.isVerified).toUpperCase() === 'TRUE' ? VERIFIED_SVG : ''}</span>`;
            const profileLink = otherUser.isGroup ? `<div>${profileLink            const allBlockedUsers = [];
            allBlockedIds.forEach(blockedId => {
                const existing =Content}</div>` : `<a href="#" class="profile-link" data-user-id="${otherUser.userId}">${profileLinkContent}</a>`;

            const existingHeader = document.getElementById('conversation-header');
             state.blockedUsersList.find(u => u.userId === blockedId);
                if (existing) allconst existingMessagesList = document.getElementById('messages-list');
            const existingForm = document.getElementById('messageBlockedUsers.push(existing);
                else {
                    const cached = state.userProfileCache[blockedId] || state.posts.find(p => p.userId === blockedId);
                    if (cached) all-input-form');

            if (existingHeader && existingMessagesList && existingForm) {
                existingHeader.innerHTML = `<button id="back-to-convos-btn"><span class="material-symbols-roundedBlockedUsers.push({ userId: blockedId, displayName: cached.displayName || 'User', profilePictureUrl: cached">arrow_back_ios_new</span></button> ${profileLink}`;
                const isScrolledToBottom = existingMessagesList.scrollHeight - existingMessagesList.scrollTop <= existingMessagesList.clientHeight + 100;.profilePictureUrl || '' });
                    else allBlockedUsers.push({ userId: blockedId, displayName: 'Unknown User', profilePictureUrl: '' });
                }
            });
            if (allBlockedUsers.length > 0) {
                blockedListContainer.innerHTML = allBlockedUsers.map(blockedUser => {

                existingMessagesList.innerHTML = state.currentConversation.messages.map(msg => this.createMessageBubble                    const pfp = sanitizeHTML(blockedUser.profilePictureUrl) || `https://api.dicebear.(msg)).join('');
                if (isScrolledToBottom) {
                    existingMessagesList.scrollTop = existingMessagesList.scrollHeight;
                }
            } else {
                conversationView.innerHTML = ` 
com/8.x/thumbs/svg?seed=${blockedUser.displayName}`;
                    return `<div class="blocked-user-row setting-row"><img src="${pfp}" class="pfp pfp-sm" style="cursor:default;"><span class="blocked-user-info">${sanitizeHTML(blockedUser.displayName)}</span>                    <div id="conversation-header"> 
                        <button id="back-to-convos-btn"><span class="material-symbols-rounded">arrow_back_ios_new</span></button> 
                        <button class="secondary unblock-btn" data-action="unblock-user" data-user-id${profileLink} 
                    </div> 
                    <div id="messages-list">
                        ${state.="${blockedUser.userId}">Unblock</button></div>`;
                }).join('');
            } else blockedListcurrentConversation.messages.map(msg => this.createMessageBubble(msg)).join('')}
                    </div> 
                    <form id="message-input-form"> 
                        <input type="text" id="message-input" placeholder="Type a message..." autocomplete="off" required> 
                        <button type="submit"Container.innerHTML = '<p style="color: var(--secondary-text-color); font-size: 14px; padding: 8px 0;">You haven\'t blocked anyone.</p>';
        },
 class="primary">Send</button> 
                    </form> `;
                const newMessagesList = document.getElementById('messages-list');
                if (newMessagesList) {
                    newMessagesList.scrollTop = new        showError(elId, msg) { const el = document.getElementById(elId); el.textContent = msg; el.classList.remove('hidden'); },
        hideError(elId) { document.getElementById(elId).classList.add('hidden'); },
        setButtonState(btnId, text, disabled) {MessagesList.scrollHeight;
                }
            }
        },
        createMessageBubble(message) {
 const btn = document.getElementById(btnId); if (btn) { btn.textContent = text; btn.disabled = disabled; } },
        renderMessagesPage() { this.renderConversationsList(); if (state.current            const isSent = message.senderId === state.currentUser.userId;
            let statusHTML = ''; Conversation.id) { this.renderConversationHistory(); } else { document.getElementById('conversation-view').innerHTML =
            let wrapperContent = '';
            
            if (isSent) { 
                if (message.status === 'sent') { 
                    statusHTML = '<div class="message-status">Sent</div>';  ` <div id="conversation-placeholder"> <span class="material-symbols-rounded">chat</span> <h3>Your
                } else if (message.status === 'sending') { 
                    statusHTML = '<div class=" Messages</h3> <p>Select a conversation or start a new one.</p> </div>`; } },
        rendermessage-status">Sending...</div>'; 
                } else if (message.status === 'failed') { ConversationsList() { const container = document.getElementById('conversations-list'); let headerHTML = `<div id="conversations-list-header"><h3>Messages</h3></div>`; let listHTML = ''; if (state.conversations
                    statusHTML = '<div class="message-status error">Failed to send</div>'; 
                } 
                
                const optionsMenuHTML = ` 
                    <div class="message-options"> 
                        <button class="options-btn" title="More options"><span class="material-symbols-rounded">more_vert</span></button> 
                        <div class="options-menu hidden"> 
                            <button class=".length === 0) { listHTML = '<p style="text-align: center; color: var(--secondary-text-color); padding: 15px;">No conversations yet.</p>'; } else { listHTMLdelete-btn" data-action="delete-message" data-message-id="${message.messageId}">Unsend</button> 
                        </div> 
                    </div> `; 
                wrapperContent = ` <div class="message-bubble sent">${ = state.conversations.map(convo => { const isActive = convo.otherUser.userId === state.sanitizeHTML(message.messageContent)}</div> ${optionsMenuHTML} `; 
            } else { 
                currentConversation.id; const pfp = sanitizeHTML(convo.otherUser.profilePictureUrl) || `https://api.dicebear.com/8.x/thumbs/svg?seed=${convo.otherUser.displayName}`; return ` <div class="conversation-item ${isActive ? 'active' : ''}" data-user-id="${convo.otherUser.userId}" data-is-group="${convo.otherUser.iswrapperContent = `<div class="message-bubble received">${sanitizeHTML(message.messageContent)}</div>`; 
            }
            return `<div class="message-wrapper ${isSent ? 'sent' : 'received'}" data-message-id="${message.messageId}"> ${wrapperContent} </div> ${isSent ? statusHTML :Group || false}"> <img src="${pfp}" class="pfp pfp-sm"> <div class=" ''}`;
        },
    };

    const handlers = {
        promptCommentImage(postId) {
            state.pendingCommentImagePostId = postId;
            ui.toggleModal('imageUrl', true);
        convo-details"> <div class="username">${sanitizeHTML(convo.otherUser.displayName)}</div> <},
        removeCommentImage(postId) {
            delete state.pendingCommentImages[postId];
            ui.render();
        },
        clearAllNotifications() {
            const ids = state.notifications.map(n => n.notificationId);
            ids.forEach(id => state.deletedNotificationIds.add(iddiv class="last-message">${sanitizeHTML(convo.lastMessage)}</div> </div> ${convo.unreadCount > 0 ? '<div class="unread-dot"></div>' : ''} </div> `; }).join(''); } container.innerHTML = headerHTML + `<div id="conversations-list-body">${listHTML}</div>`;));
            localStorage.setItem('notificationBlacklist', JSON.stringify(Array.from(state.deletedNotificationIds },
        renderConversationHistory() {
            const conversationView = document.getElementById('conversation-view');
            const otherUser = state.conversations.find(c => c.otherUser.userId === state.currentConversation.id)?.otherUser;
            
            if (!otherUser) { 
                conversationView.innerHTML =)));
            state.notifications = [];
            ui.renderNotifications();
            state.unreadNotificationCount = 0;
            core.updateNotificationDot();
            ids.forEach(id => api.call('deleteNotification `<div id="conversation-placeholder"><p>Could not load conversation.</p></div>`; 
                return;', { userId: state.currentUser.userId, notificationId: id }));
        },
        async login() { 
            ui.hideError('login-error'); 
            const [username, password] = [document 
            }

            const pfp = sanitizeHTML(otherUser.profilePictureUrl) || `https://.getElementById('login-username').value.trim(), document.getElementById('login-password').value.trim()]; 
            if (!username || !password) return ui.showError('login-error', 'All fields required.');api.dicebear.com/8.x/thumbs/svg?seed=${otherUser.displayName}`;
            const profileLinkContent = `<img src="${pfp}" class="pfp pfp-sm"> <span>${sanitizeHTML(otherUser.displayName)} ${!otherUser.isGroup && String(otherUser.isVerified).toUpperCase() === 'TRUE' ? VERIFIED_SVG : ''}</span>`;
            const profileLink = otherUser.isGroup ? `<div>${profileLinkContent}</div>` : `<a href="#" class="profile-link" 
            ui.setButtonState('login-btn', 'Logging In...', true); 
            try { data-user-id="${otherUser.userId}">${profileLinkContent}</a>`;

            const existingHeader = document.getElementById('conversation-header');
            const existingMessagesList = document.getElementById('messages-list');
             
                const { user } = await api.call('login', { username, password }); 
                stateconst existingForm = document.getElementById('message-input-form');

            if (existingHeader && existingMessagesList.currentUser = user; 
                localStorage.setItem('currentUser', JSON.stringify(user)); 
                await && existingForm) {
                existingHeader.innerHTML = `<button id="back-to-convos-btn"><span class="material-symbols-rounded">arrow_back_ios_new</span></button> ${profileLink}`;
                const isScrolledToBottom = existingMessagesList.scrollHeight - existingMessagesList.scrollTop <= existingMessages core.initializeApp(); 
            } catch (e) { 
                if (e.message === 'ACCOUNTList.clientHeight + 100;
                existingMessagesList.innerHTML = state.currentConversation.messages.map(msg => this.createMessageBubble(msg)).join('');
                if (isScrolledToBottom)_BANNED') { 
                    if (e.user) {
                         // Lock the user in by {
                    existingMessagesList.scrollTop = existingMessagesList.scrollHeight;
                }
            } else {
                conversationView.innerHTML = ` 
                    <div id="conversation-header"> 
                        <button id="back-to-conv saving the session, then show ban page
                         state.currentUser = e.user;
                         localStorage.setItem('currentUser', JSON.stringify(e.user));
                    }
                    ui.renderBanPage(e.banos-btn"><span class="material-symbols-rounded">arrow_back_ios_new</span></button> 
                        ${profileLink} 
                    </div> 
                    <div id="messages-list">
                        ${state.currentConversation.messages.map(msg => this.createMessageBubble(msg)).join('')}
                    </div> 
                    <form id="message-input-form"> 
                        <input type="text"Details); 
                    core.navigateTo('suspended'); 
                } else if (e.message === 'SERVER_OUTAGE') { 
                    if (e.user) {
                        state.currentUser = e.user;
                        localStorage.setItem('currentUser', JSON.stringify(e.user));
                    }
                    core.navigateTo('outage'); 
                } else { 
                    ui.showError('login-error', e id="message-input" placeholder="Type a message..." autocomplete="off" required> 
                        <button type="submit" class="primary">Send</button> 
                    </form> `;
                const newMessagesList = document.getElementById('messages-list');
                if (newMessagesList) {
                    newMessagesList..message); 
                } 
            } finally { 
                ui.setButtonState('login-btn', 'Log In', false); 
            } 
        },
        async register() {
            ui.hideError('register-error');
            const [username, displayName, password] = [
                document.getElementById('register-username').value.trim(),
                document.getElementById('register-displayname').value.trim(),
                document.getElementById('register-password').value.trim()
            ];
            const confirmPassword = document.getElementById('register-password-confirm').value.trim();
            const tosChecked = document.getElementByIdscrollTop = newMessagesList.scrollHeight;
                }
            }
        },
        createMessageBubble(message('register-tos').checked;
            if (!tosChecked) return ui.showError('register-error', 'You must agree to the Terms of Service.');
            if (!username || !displayName || !password || !confirm) {
            const isSent = message.senderId === state.currentUser.userId;
            let statusHTML = ''; 
            let wrapperContent = '';
            
            if (isSent) { 
                ifPassword) return ui.showError('register-error', 'All fields required.');
            if (password !== confirmPassword) return ui.showError('register-error', 'Passwords do not match.');
            if (password.length < 4) return ui.showError('register-error', 'Password must be at least 4 characters long.');
            if (username.length > 25) return ui.showError('register-error', (message.status === 'sent') { 
                    statusHTML = '<div class="message-status">Sent 'Username cannot be longer than 25 characters.');
            if (displayName.length > 30) return ui.showError('register-error', 'Display Name cannot be longer than 30 characters.');
            if (!/^[a-zA-Z0-9_.]+$/.test(username)) return ui.showError('</div>'; 
                } else if (message.status === 'sending') { 
                    statusHTML = '<register-error', 'Username can only contain letters, numbers, dots, and underscores.');

            ui.setButtonState('register-btn', 'Signing Up...', true);
            try {
                const { user } = awaitdiv class="message-status">Sending...</div>'; 
                } else if (message.status === 'failed api.call('register', { username, displayName, password });
                state.currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(user));
                await core.initializeApp();
            } catch (e) {
                ui.showError('register-error', e.message);
            } finally {
                ') { 
                    statusHTML = '<div class="message-status error">Failed to send</div>'; 
                } 
                
                const optionsMenuHTML = ` 
                    <div class="message-options"> 
                        <button class="options-btn" title="More options"><span class="material-symbols-rounded">more_vert</span></button> 
                        <div class="options-menu hidden"> 
                            <ui.setButtonState('register-btn', 'Sign Up', false);
            }
        },
        async createPost() { 
            const contentInput = document.getElementById('post-content-input'); 
button class="delete-btn" data-action="delete-message" data-message-id="${message.messageId}">Unsend</button> 
                        </div> 
                    </div> `; 
                wrapperContent = ` <            let rawContent = contentInput.value.trim();
            let postContent = sanitizeHTML(rawContent).div class="message-bubble sent">${sanitizeHTML(message.messageContent)}</div> ${optionsMenuHTML} `; replace(/\n/g, '<br>'); 
            const imageUrl = state.postImageUrl; 
            const
            } else { 
                wrapperContent = `<div class="message-bubble received">${sanitizeHTML(message.messageContent)}</div>`; 
            }
            return `<div class="message-wrapper ${isSent ? videoUrl = state.postVideoUrl; 
            
            if (!postContent && !imageUrl && !videoUrl && !state.editingPostId) return; 
            if (imageUrl) postContent += `<br>< 'sent' : 'received'}" data-message-id="${message.messageId}"> ${wrapperContent} </div> ${isSent ? statusHTML : ''}`;
        },
    };

    const handlers = {
        img src="${sanitizeHTML(imageUrl)}" alt="user image">`; 
            else if (videoUrl) postpromptCommentImage(postId) {
            state.pendingCommentImagePostId = postId;
            ui.toggleModal('imageUrl', true);
        },
        removeCommentImage(postId) {
            delete state.pendingCommentImages[postId];
            ui.render();
        },
        clearAllNotifications() {
            constContent += `<br><video src="${sanitizeHTML(videoUrl)}" controls playsinline preload="metadata"></video>`;

            const isUpdating = !!state.editingPostId; 
            const button = document.getElementById('submit- ids = state.notifications.map(n => n.notificationId);
            ids.forEach(id => state.deletedNotificationIds.add(id));
            localStorage.setItem('notificationBlacklist', JSON.stringify(Array.from(state.deletedNotificationIds)));
            state.notifications = [];
            ui.renderNotifications();
post-btn'); 
            const originalButtonText = isUpdating ? 'Save Changes' : 'Post'; 
            ui.setButtonState(button.id, 'Posting...', true); 
            ui.hideError('create-post-error');

            try { 
                if (isUpdating) { 
                    await            state.unreadNotificationCount = 0;
            core.updateNotificationDot();
            ids.forEach(id => api.call('deleteNotification', { userId: state.currentUser.userId, notificationId: id }));
 api.call('updatePost', { userId: state.currentUser.userId, postId: state.editingPostId,        },
        async login() { 
            ui.hideError('login-error'); 
            const [username, password] = [document.getElementById('login-username').value.trim(), document.getElementById('login postContent: postContent }); 
                } else { 
                    const newPost = {
                        postId: `temp_${Date.now()}`, userId: state.currentUser.userId, postContent: postContent, isStory-password').value.trim()]; 
            if (!username || !password) return ui.showError('login: false, storyDuration: 0, expiryTimestamp: null, timestamp: new Date().toISOString(), likes: [], comments: [],
                        displayName: state.currentUser.displayName, username: state.currentUser.username, profilePictureUrl: state.currentUser.profilePictureUrl, isVerified: state.currentUser.isVerified
                    };
                    state.localPendingPosts.unshift(newPost);
                    persistence.save(); // Save Pending State
                    state.posts.unshift(newPost);
                    api.call('createPost', { userId: state.currentUser.userId-error', 'All fields required.'); 
            ui.setButtonState('login-btn', 'Logging In...', true); 
            try { 
                const { user } = await api.call('login', {, postContent, isStory: false, storyDuration: 0 }); 
                } 
                
                 username, password }); 
                state.currentUser = user; 
                localStorage.setItem('currentUser', JSON.stringify(user)); 
                await core.initializeApp(); 
            } catch (e) { 
                contentInput.value = ''; state.postImageUrl = null; state.postVideoUrl = null; state.editingif (e.message === 'ACCOUNT_BANNED') { 
                    if (e.user) {PostId = null; 
                ui.renderImagePreview(); 
                button.textContent = 'Post'; 
                core.navigateTo('feed'); 
                if (state.currentFeedType === 'foryou
                         // Lock the user in by saving the session, then show ban page
                         state.currentUser = e.') ui.renderFeed(state.posts, document.getElementById('foryou-feed'), true);
                else ui.renderFeed(state.posts, document.getElementById('following-feed'), true);
            } catchuser;
                         localStorage.setItem('currentUser', JSON.stringify(e.user));
                    }
                    ui (e) { 
                 if (e.message.toLowerCase().includes("inappropriate")) ui.showError('create-post-error', e.message);
                 else alert(`Error: ${e.message}`); .renderBanPage(e.banDetails); 
                    core.navigateTo('suspended'); 
                } else if (e.message === 'SERVER_OUTAGE') { 
                    if (e.user) {

            } finally { 
                ui.setButtonState(button.id, originalButtonText, false);                        state.currentUser = e.user;
                        localStorage.setItem('currentUser', JSON.stringify(e.user 
                if (isUpdating) { button.textContent = 'Post'; state.editingPostId = null; } 
            } 
        },
        enterEditMode(postId) { const post = state.posts.find(p => p.postId === postId); if (!post) return; core.navigateTo('createPost'); setTimeout(() => { const textContent = post.postContent.replace(/<br><img src=".*?" alt=".*?">/g, '').trim(); document.getElementById('post-content-input').value = textContent; document.getElementById('submit-post-btn').textContent = 'Save Changes'; state.editingPostId = postId;));
                    }
                    core.navigateTo('outage'); 
                } else { 
                    ui.showError('login-error', e.message); 
                } 
            } finally { 
                ui.setButtonState('login-btn', 'Log In', false); 
            } 
        },
        async register() {
            ui.hideError('register-error');
            const [username, displayName document.getElementById('post-content-input').focus(); }, 100); },
        async addComment(postId, commentText) { 
            if (!commentText.trim() && !state.pendingCommentImages[postId]) return;
            let finalCommentText = sanitizeHTML(commentText.trim());
            if (, password] = [
                document.getElementById('register-username').value.trim(),
                document.getElementById('register-displayname').value.trim(),
                document.getElementById('register-password').value.trim()state.pendingCommentImages[postId]) finalCommentText += `<br><img src="${sanitizeHTML(state.pendingCommentImages[postId])}" alt="comment image">`;

            const tempComment = { 
                commentId
            ];
            const confirmPassword = document.getElementById('register-password-confirm').value.trim();
: `temp_${Date.now()}`, userId: state.currentUser.userId, displayName: state.currentUser.displayName, isVerified: state.currentUser.isVerified, profilePictureUrl: state.currentUser.profilePictureUrl, commentText: finalCommentText, timestamp: new Date().toISOString()
            }; 
            
            // Add to State
            const postIndex = state.posts.findIndex(p => p.postId === postId); 
                        const tosChecked = document.getElementById('register-tos').checked;
            if (!tosChecked) return ui.showError('register-error', 'You must agree to the Terms of Service.');
            if (!username ||if (postIndex > -1) { 
                state.posts[postIndex].comments.push(temp !displayName || !password || !confirmPassword) return ui.showError('register-error', 'All fields requiredComment); 
                // Add to Pending
                state.pendingComments.push({ postId: postId, userId: state.currentUser.userId, commentText: finalCommentText, timestamp: tempComment.timestamp });
                persistence.save();

                delete state.pendingCommentImages[postId];
                delete state.pendingCommentDrafts[postId.');
            if (password !== confirmPassword) return ui.showError('register-error', 'Passwords do not match.');
            if (password.length < 4) return ui.showError('register-error', ']; 
                ui.render(); 
            } 
            try { await api.call('addComment', { postId, userId: state.currentUser.userId, commentText: finalCommentText }); } catch (e)Password must be at least 4 characters long.');
            if (username.length > 25) return ui.showError('register-error', 'Username cannot be longer than 25 characters.');
            if (displayName { 
                alert(`Error: ${e.message}`); 
                const pIndex = state.posts.findIndex(p => p.postId === postId); 
                if (pIndex > -1) { state.posts[pIndex].comments = state.posts[pIndex].comments.filter(c => c.commentId !== tempComment.commentId); ui.render(); } 
            } 
        },
        async toggleLike(postId) {
            const post = state.posts.find(p => p.postId === postId); if (!post) return;
.length > 30) return ui.showError('register-error', 'Display Name cannot be longer than 30 characters.');
            if (!/^[a-zA-Z0-9_.]+$/.test(username)) return ui.showError('register-error', 'Username can only contain letters, numbers, dots, and            const isLiked = post.likes.some(l => l.userId === state.currentUser.userId);
 underscores.');

            ui.setButtonState('register-btn', 'Signing Up...', true);
            try {            const newStatus = !isLiked;
            
            // Persistence
            state.pendingOverrides.likes[postId] = { status: newStatus, timestamp: Date.now() };
            persistence.save();

            if (newStatus) post.likes.push({ userId: state.currentUser.userId });
            else post.likes = post.likes.filter(l => l.userId !== state.currentUser.userId);
            ui.
                const { user } = await api.call('register', { username, displayName, password });
                state.currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(user));
                await core.initializeApp();
            } catch (e) {
                ui.showError('register-error', e.message);
            } finally {
                ui.setButtonState('register-btn', 'Sign Up', false);
            }
        },
        async createPost() { 
            const contentInput = document.getElementById('render();
            try { await api.call('toggleLike', { postId, userId: state.currentUser.userId }); } catch (e) {
                delete state.pendingOverrides.likes[postId];
                persistence.save();
                if (!newStatus) post.likes.push({ userId: state.currentUser.userId });
                else post.likes = post.likes.filter(l => l.userId !== state.currentUser.userId);
post-content-input'); 
            let rawContent = contentInput.value.trim();
            let postContent = sanitizeHTML(rawContent).replace(/\n/g, '<br>'); 
            const imageUrl = state                ui.render(); alert(`Error: ${e.message}`);
            }
        },
        async update.postImageUrl; 
            const videoUrl = state.postVideoUrl; 
            
            if (!postContent && !imageUrl && !videoUrl && !state.editingPostId) return; 
            if (Profile() { ui.hideError('edit-profile-error'); const [displayName, pfpUrl, description] = [document.getElementById('edit-display-name').value, document.getElementById('edit-pfp-urlimageUrl) postContent += `<br><img src="${sanitizeHTML(imageUrl)}" alt="user image">`; 
            else if (videoUrl) postContent += `<br><video src="${sanitizeHTML(videoUrl)}" controls playsinline preload="metadata"></video>`;

            const isUpdating = !!state.editingPostId; 
            const').value, document.getElementById('edit-description').value]; ui.setButtonState('save-profile-btn', 'Saving...', true); try { await api.call('updateProfile', { userId: state.currentUser.userId button = document.getElementById('submit-post-btn'); 
            const originalButtonText = isUpdating ? 'Save Changes' : 'Post'; 
            ui.setButtonState(button.id, 'Posting...', true, displayName, profilePictureUrl: pfpUrl, description }); state.currentUser = { ...state.currentUser, displayName, profilePictureUrl: pfpUrl, description }; localStorage.setItem('currentUser', JSON.stringify(state.currentUser); 
            ui.hideError('create-post-error');

            try { 
                if (isUpdating) { 
                    await api.call('updatePost', { userId: state.currentUser.userId, postId: state.editingPostId, postContent: postContent }); 
                } else { 
                    const newPost = {
                        postId: `temp_${Date.now()}`, userId: state.currentUser.userId, postContent: postContent, isStory: false, storyDuration: 0, expiryTimestamp: null, timestamp: new Date().toISOString(), likes: [], comments: [],
                        displayName: state.currentUser.displayName, username: state.currentUser.username, profilePictureUrl: state.currentUser.profilePictureUrl, isVerified: state.currentUser.)); await core.refreshFeed(false); await handlers.showProfile(state.currentUser.userId); } catch (e) { ui.showError('edit-profile-error', e.message); } finally { ui.setisVerified
                    };
                    state.localPendingPosts.unshift(newPost);
                    persistence.save(); // Save Pending State
                    state.posts.unshift(newPost);
                    api.call('createPost',ButtonState('save-profile-btn', 'Save Changes', false); } },
        async deletePost(postId) { 
            if (!confirm("Delete this post?")) return; 
            state.deletedPostIds.add(postId);
            localStorage.setItem('deletedPostIds', JSON.stringify(Array.from(state.deletedPostIds)));
            const postToDeleteIndex = state.posts.findIndex(p => p.postId === { userId: state.currentUser.userId, postContent, isStory: false, storyDuration: 0 });  postId); 
            if (postToDeleteIndex !== -1) state.posts.splice(postToDeleteIndex, 1);
            const pendingIndex = state.localPendingPosts.findIndex(p => p.postId === postId
                } 
                
                contentInput.value = ''; state.postImageUrl = null; state.postVideoUrl = null; state.editingPostId = null; 
                ui.renderImagePreview(); 
);
            if (pendingIndex !== -1) { state.localPendingPosts.splice(pendingIndex, 1); persistence.save(); }
            ui.render(); 
            try { await api.call('delete                button.textContent = 'Post'; 
                core.navigateTo('feed'); 
                if (state.currentFeedType === 'foryou') ui.renderFeed(state.posts, document.getElementById('foryou-feed'), true);
                else ui.renderFeed(state.posts, document.getElementById('following-Post', { postId, userId: state.currentUser.userId }); } catch (e) { 
                alert(`Error: Could not delete post. ${e.message}`); 
                state.deletedPostIds.delete(postIdfeed'), true);
            } catch (e) { 
                 if (e.message.toLowerCase().includes("inappropriate")) ui.showError('create-post-error', e.message);
                 else alert(); localStorage.setItem('deletedPostIds', JSON.stringify(Array.from(state.deletedPostIds))); await core.refreshFeed(true); 
            } 
        },
        async deleteComment(commentId)`Error: ${e.message}`); 
            } finally { 
                ui.setButtonState(button. { 
            if (!confirm("Delete this comment?")) return; 
            state.deletedCommentIds.add(commentId);
            localStorage.setItem('deletedCommentIds', JSON.stringify(Array.from(state.deletedCommentIds)));
            let postIndex = -1, commentIndex = -1, commentToDelete = nullid, originalButtonText, false); 
                if (isUpdating) { button.textContent = 'Post'; state.editingPostId = null; } 
            } 
        },
        enterEditMode(postId) { const post = state.posts.find(p => p.postId === postId); if (!post) return; core.navigateTo('createPost'); setTimeout(() => { const textContent = post.postContent.replace(/<br><img src=".*?" alt=".*?">/g, '').trim(); document.getElementById('post-content-input').value = textContent; document.getElementById('submit-post-btn').textContent = 'Save Changes'; state.editingPostId = postId; document.getElementById('post-content-input').focus(); }, 100); },
        async addComment(postId, commentText) { 
            if (!commentText.trim() && !state.pendingCommentImages[postId]) return;
            let finalCommentText = sanitizeHTML(commentText.trim());
            if (state.pendingCommentImages[postId]) finalCommentText += `<br><img; 
            for (let i = 0; i < state.posts.length; i++) {  src="${sanitizeHTML(state.pendingCommentImages[postId])}" alt="comment image">`;

            const tempComment = { 
                commentId: `temp_${Date.now()}`, userId: state.currentUser.userId, displayName: state.currentUser.displayName, isVerified: state.currentUser.isVerified, profilePictureUrl: state
                const foundIndex = state.posts[i].comments.findIndex(c => c.commentId === comment.currentUser.profilePictureUrl, commentText: finalCommentText, timestamp: new Date().toISOString()
            }; 
            
            // Add to State
            const postIndex = state.posts.findIndex(p => p.postId === postId); 
            if (postIndex > -1) { 
                state.posts[postIndex].comments.push(tempComment); 
                // Add to Pending
                state.pendingComments.Id); 
                if (foundIndex !== -1) { postIndex = i; commentIndex = foundIndex; commentToDelete = state.posts[i].comments[foundIndex]; break; } 
            } 
            if (postIndex === -1) return; 
            state.posts[postIndex].comments.splice(commentIndex, 1); ui.render(); 
            try { await api.call('deleteComment',push({ postId: postId, userId: state.currentUser.userId, commentText: finalCommentText, timestamp: tempComment.timestamp });
                persistence.save();

                delete state.pendingCommentImages[postId];
                delete state.pendingCommentDrafts[postId]; 
                ui.render(); 
            } 
            try { await api.call('addComment', { postId, userId: state.currentUser.userId, commentText: finalCommentText }); } catch (e) { 
                alert(`Error: ${e.message}`); 
                const pIndex = state.posts.findIndex(p => p.postId === postId); 
                if (pIndex > -1) { state.posts[pIndex].comments = state.posts[pIndex].comments. { commentId, userId: state.currentUser.userId }); } catch (e) { 
                alert(`Error: Could not delete comment. ${e.message}`); 
                state.deletedCommentIds.delete(commentIdfilter(c => c.commentId !== tempComment.commentId); ui.render(); } 
            } 
        },
        async toggleLike(postId) {
            const post = state.posts.find(p => p.postId === postId); if (!post) return;
            const isLiked = post.likes.some(l => l.userId); localStorage.setItem('deletedCommentIds', JSON.stringify(Array.from(state.deletedCommentIds))); state === state.currentUser.userId);
            const newStatus = !isLiked;
            
            // Persistence
            state.pendingOverrides.likes[postId] = { status: newStatus, timestamp: Date.now() };.posts[postIndex].comments.splice(commentIndex, 0, commentToDelete); ui.render(); 
            } 
        },
        async toggleFollow(followingId) {
            const followBtn = document
            persistence.save();

            if (newStatus) post.likes.push({ userId: state.currentUser.getElementById('follow-btn'); if (!followBtn) return; followBtn.disabled = true;
            const isFollowing = state.currentUserFollowingList.includes(followingId);
            const newStatus = !isFollowing;.userId });
            else post.likes = post.likes.filter(l => l.userId !== state.currentUser.userId);
            ui.render();
            try { await api.call('toggleLike', { postId, userId: state.currentUser.userId }); } catch (e) {
                delete state.pendingOverrides.likes[postId];
                persistence.save();
                if (!newStatus) post.likes.push({ userId: state.currentUser.userId });
                else post.likes = post.likes.filter(l => l.userId
            state.pendingOverrides.follows[followingId] = { status: newStatus, timestamp: Date.now() };
            persistence.save();

            if (newStatus) state.currentUserFollowingList.push(following !== state.currentUser.userId);
                ui.render(); alert(`Error: ${e.message}`);
            }
        },
        async updateProfile() { ui.hideError('edit-profile-error'); const [displayName, pfpUrl, description] = [document.getElementById('edit-display-name').value, document.getElementById('edit-pfp-url').value, document.getElementById('edit-description').value]; ui.setButtonState('save-profile-btn', 'Saving...', true); try { await api.call('updateProfile',Id);
            else state.currentUserFollowingList = state.currentUserFollowingList.filter(id => id !== followingId);
            if (state.profileUser && state.profileUser.userId === followingId) {
                  { userId: state.currentUser.userId, displayName, profilePictureUrl: pfpUrl, description }); state.currentUser = { ...state.currentUser, displayName, profilePictureUrl: pfpUrl, description }; localStorage.setItem('currentUser', JSON.stringify(state.currentUser)); await core.refreshFeed(false); await handlers.showProfile(state.currentUser.userId); } catch (e) { ui.showError('edit-profile-error', e.message); } finally { ui.setButtonState('save-profile-btn', 'Save Changes', false); } },
        async deletePost(postId) { 
            if (!confirm("Delete this post?")) return;const isFollower = state.currentUserFollowersList.includes(followingId);
                 if(newStatus && 
            state.deletedPostIds.add(postId);
            localStorage.setItem('deletedPostIds', JSON.stringify(Array.from(state.deletedPostIds)));
            const postToDeleteIndex = state.posts.findIndex(p => p.postId === postId); 
            if (postToDeleteIndex !== -1) state.posts.splice(postToDeleteIndex, 1);
            const pendingIndex = state.localPendingPosts.findIndex(p => p.postId === postId);
            if (pendingIndex !== -1) { state.localPendingPosts.splice(pendingIndex, 1); persistence.save(); }
            ui.render(); 
            try { await api.call('deletePost', { postId, userId: state.currentUser.userId }); } catch ( isFollower) state.profileUser.relationship = 'Friends';
                 else if(newStatus) state.e) { 
                alert(`Error: Could not delete post. ${e.message}`); 
                state.deletedPostIds.delete(postId); localStorage.setItem('deletedPostIds', JSON.stringify(Array.fromprofileUser.relationship = 'Following';
                 else if(isFollower) state.profileUser.relationship = 'Follows You';
                 else state.profileUser.relationship = 'None';
                 ui.renderProfile(state.deletedPostIds))); await core.refreshFeed(true); 
            } 
        },
        async deleteComment(commentId) { 
            if (!confirm("Delete this comment?")) return; Page();
            }
            try { const result = await api.call('toggleFollow', { followerId: state.currentUser.userId, followingId }); if(state.profileUser && state.profileUser.userId === followingId) { state.profileUser.relationship = result.newRelationship; ui.renderProfilePage(); } } catch
            state.deletedCommentIds.add(commentId);
            localStorage.setItem('deletedCommentIds', JSON (e) {
                delete state.pendingOverrides.follows[followingId];
                persistence.save();
                if (!newStatus) state.currentUserFollowingList.push(followingId); else state.currentUserFollowingList = state.currentUserFollowingList.filter(id => id !== followingId);
                alert(`Error: ${e.message}`); ui.renderProfilePage();
            }
        },
        async search(query) {
            try {
                const results = await api.call('search', { query, currentUserId: state.currentUser.userId }, 'GET');
                state.search.results = results;
            } catch (e) {
                document.getElementById('search-results').innerHTML = `<p class="error-message">Search failed: ${e.message}</p>`;
                state.search.results = { users: [], posts: [] };
            } finally {
                state.search.isLoading = false;
                if (state.currentView === 'search') ui.renderSearchView();
            }
        },
        async showProfile(userId, scrollToPostId = null.stringify(Array.from(state.deletedCommentIds)));
            let postIndex = -1, commentIndex = -1, commentToDelete = null; 
            for (let i = 0; i < state.) {
            if (state.currentView !== 'profile') state.feedScrollPosition = window.scrollY;
            state.scrollToPostId = scrollToPostId;
            core.navigateTo('profile');
            const cachedposts.length; i++) { 
                const foundIndex = state.posts[i].comments.findIndex(c => c.commentId === commentId); 
                if (foundIndex !== -1) { postIndexUser = state.userProfileCache[userId];
            if (cachedUser) { state.profileUser = cachedUser; ui.renderProfilePage(); } else { state.profileUser = null; ui.showProfileSkeleton(); }
            try {
                const { user } = await api.call('getUserProfile', { userId, currentUserId: state.currentUser.userId }, 'GET');
                state.userProfileCache[userId] = { ...(state.userProfileCache[userId] || {}), ...user };
                if (state.currentView === 'profile' && (!state.profileUser || state.profileUser.userId === userId)) {
                    state.profileUser = user;
                    if (state.pendingOverrides.follows[userId]) {
                        const override = state.pendingOverrides.follows[userId];
                        const isFollower = state.currentUserFollowersList.includes( = i; commentIndex = foundIndex; commentToDelete = state.posts[i].comments[foundIndex]; break; } 
            } 
            if (postIndex === -1) return; 
            state.posts[postIndex].comments.splice(commentIndex, 1); ui.render(); 
            try {userId);
                        if (override.status && isFollower) user.relationship = 'Friends';
                        else if (override.status) user.relationship = 'Following';
                        else if (isFollower) user.relationship = 'Follows You';
                        else user.relationship = 'None';
                    }
                    ui. await api.call('deleteComment', { commentId, userId: state.currentUser.userId }); } catch (erenderProfilePage();
                }
            } catch (e) {
                if (state.currentView === 'profile' && (!state.profileUser || state.profileUser.userId === userId)) {
                    document.getElementById('profile-content').innerHTML = `<p class="error-message" style="text-align:center;">Could not load profile: ${e.message}</p>`;
                    document.getElementById('profile-feed').innerHTML =) { 
                alert(`Error: Could not delete comment. ${e.message}`); 
                state.deletedCommentIds.delete(commentId); localStorage.setItem('deletedCommentIds', JSON.stringify(Array.from(state.deletedCommentIds))); state.posts[postIndex].comments.splice(commentIndex, 0, '';
                    if (e.message === "User not found") setTimeout(() => core.navigateTo('feed'),  commentToDelete); ui.render(); 
            } 
        },
        async toggleFollow(followingId)1500);
                }
            }
        },
        async showPostDetail(postId) {
            state.previousView = state.currentView;
            const post = state.posts.find(p => p.postId === postId);
            if (!post) { alert("Could not find post details."); return; }
            state.currentPostDetail = post;
            core.navigateTo('postDetail');
        },
 {
            const followBtn = document.getElementById('follow-btn'); if (!followBtn) return; followBtn.disabled = true;
            const isFollowing = state.currentUserFollowingList.includes(followingId);
                    async blockUser(userIdToBlock) { 
            if (userIdToBlock === state.currentUser.userId) return; 
            const userToBlock = state.posts.find(p => p.userId === userIdToBlock) || state.profileUser || state.blockedUsersList.find(u => u.userId === userIdToBlock); 
            const userName = userToBlock ? userToBlock.displayName : 'this user'; const newStatus = !isFollowing;
            state.pendingOverrides.follows[followingId] = { status: newStatus, timestamp: Date.now() };
            persistence.save();

            if (newStatus) state
            if (confirm(`Are you sure you want to block ${userName}?`)) { 
                state.localBlocklist.add(userIdToBlock);
                localStorage.setItem('localBlocklist', JSON.stringify(.currentUserFollowingList.push(followingId);
            else state.currentUserFollowingList = state.currentUserFollowingList.filter(id => id !== followingId);
            if (state.profileUser && state.profileUser.Array.from(state.localBlocklist)));
                state.posts = state.posts.filter(p =>userId === followingId) {
                 const isFollower = state.currentUserFollowersList.includes(followingId);
                 if(newStatus && isFollower) state.profileUser.relationship = 'Friends';
                  p.userId !== userIdToBlock);
                if (!state.blockedUsersList.find(u => u.userId === userIdToBlock) && userToBlock) state.blockedUsersList.push(userToBlock);
                ui.render(); 
                try { 
                    await api.call('blockUser', { blockerIdelse if(newStatus) state.profileUser.relationship = 'Following';
                 else if(isFollower) state.profileUser.relationship = 'Follows You';
                 else state.profileUser.relationship = ': state.currentUser.userId, blockedId: userIdToBlock }); 
                    alert(`${userName} has been blockedNone';
                 ui.renderProfilePage();
            }
            try { const result = await api.call.`); 
                    if (state.currentView === 'profile' && state.profileUser && state.profileUser.userId === userIdToBlock) core.navigateTo('feed'); 
                } catch (e) { alert(('toggleFollow', { followerId: state.currentUser.userId, followingId }); if(state.profileUser && state.profileUser.userId === followingId) { state.profileUser.relationship = result.newRelationship; ui.renderProfilePage(); } } catch (e) {
                delete state.pendingOverrides.follows[followingId`Error: Could not block user. ${e.message}`); } 
            } 
        },
        async unblockUser(userIdToUnblock, event) { 
            const unblockBtn = event.target.];
                persistence.save();
                if (!newStatus) state.currentUserFollowingList.push(followingIdclosest('.unblock-btn'); if (!unblockBtn) return; unblockBtn.disabled = true; unblockBtn.textContent = 'Unblocking...'; 
            try { 
                state.localBlocklist.); else state.currentUserFollowingList = state.currentUserFollowingList.filter(id => id !== followingId);
                alert(`Error: ${e.message}`); ui.renderProfilePage();
            }
        },
        async search(query) {
            try {
                const results = await api.call('search', { query, currentUserId: state.currentUser.userId }, 'GET');
                state.search.results = results;
delete(userIdToUnblock);
                localStorage.setItem('localBlocklist', JSON.stringify(Array.from(state.localBlocklist)));
                state.blockedUsersList = state.blockedUsersList.filter(u => u.userId !== userIdToUnblock); 
                ui.renderSettingsPage();
                await api.call('blockUser', { blockerId: state.currentUser.userId, blockedId: userIdToUnblock });             } catch (e) {
                document.getElementById('search-results').innerHTML = `<p class="error-message">Search failed: ${e.message}</p>`;
                state.search.results = { users: [], posts: [] };
            } finally {
                state.search.isLoading = false;
                if (
            } catch (e) { alert(`Error unblocking user: ${e.message}`); state.localBlockstate.currentView === 'search') ui.renderSearchView();
            }
        },
        async showProfile(userId, scrollToPostId = null) {
            if (state.currentView !== 'profile') state.list.add(userIdToUnblock); ui.renderSettingsPage(); } 
        },
        openReportfeedScrollPosition = window.scrollY;
            state.scrollToPostId = scrollToPostId;
            core.Modal(userId, postId = null) { state.reporting = { userId, postId }; const user = state.postsnavigateTo('profile');
            const cachedUser = state.userProfileCache[userId];
            if (cachedUser) { state.profileUser = cachedUser; ui.renderProfilePage(); } else { state.profileUser =.find(p => p.userId === userId) || state.profileUser; const title = document.getElementById('report-modal-title'); title.textContent = postId ? `Report post by ${user.displayName}` : `Report ${user.displayName}`; ui.toggleModal('report', true); },
        async submitReport() { const reason null; ui.showProfileSkeleton(); }
            try {
                const { user } = await api.call = document.getElementById('report-reason-input').value.trim(); if (!reason) { alert('Please provide a reason for the report.'); return; } ui.setButtonState('submit-report-btn', 'Submitting...', true); try { await api.call('reportUser', { reporterId: state.currentUser.userId, reportedId: state.reporting.userId, postId: state.reporting.postId, reason: reason }); alert('Report submitted successfully.'); ui.toggleModal('report', false); } catch (e) { alert(`Error: Could not submit report. ${e.message}`); } finally { ui.setButtonState('submit-report-btn', 'Submit('getUserProfile', { userId, currentUserId: state.currentUser.userId }, 'GET');
                state.userProfileCache[userId] = { ...(state.userProfileCache[userId] || {}), ...user };
                 Report', false); } },
        openBanModal(userId) {
            const userToBan = state.posts.find(p => p.userId === userId) || state.profileUser;
            if (!userToBan) { alert("Could not find user information."); return; }
            state.banningUserId = userId;if (state.currentView === 'profile' && (!state.profileUser || state.profileUser.userId === userId)) {
                    state.profileUser = user;
                    if (state.pendingOverrides.follows[userId
            document.getElementById('ban-modal-title').textContent = `Ban ${userToBan.displayName}`;
            document.getElementById('ban-reason-input').value = '';
            ui.toggleModal('ban', true]) {
                        const override = state.pendingOverrides.follows[userId];
                        const isFollower = state.currentUserFollowersList.includes(userId);
                        if (override.status && isFollower) user.);
        },
        async submitBan() {
            const reason = document.getElementById('ban-reason-input').value.trim();
            const durationHours = document.getElementById('ban-duration-select').value;relationship = 'Friends';
                        else if (override.status) user.relationship = 'Following';
                        else if (isFollower) user.relationship = 'Follows You';
                        else user.relationship = 'None
            const userIdToBan = state.banningUserId;
            if (!reason) { alert('Please provide a reason for the ban.'); return; }
            ui.setButtonState('submit-ban-btn', '';
                    }
                    ui.renderProfilePage();
                }
            } catch (e) {
Submitting...', true);
            try {
                const result = await api.call('banUser', { adminUserId: state.currentUser.userId, bannedUserId: userIdToBan, reason: reason, durationHours: parseInt(                if (state.currentView === 'profile' && (!state.profileUser || state.profileUser.userId === userId)) {
                    document.getElementById('profile-content').innerHTML = `<p class="error-message" style="text-align:center;">Could not load profile: ${e.message}</p>`;
                    document.getElementById('profile-feed').innerHTML = '';
                    if (e.message === "User not found") setTimeout(()durationHours) });
                alert(result.message || 'User has been banned successfully.');
                ui.toggleModal('ban', false); state.banningUserId = null; await core.refreshFeed(true);
            } catch (e) { alert(`Error: ${e.message}`); } finally { ui.setButtonState(' => core.navigateTo('feed'), 1500);
                }
            }
        },
        async showPostDetail(postId) {
            state.previousView = state.currentView;
            const postsubmit-ban-btn', 'Submit Ban', false); }
        },
        showHashtagFeed(tag) { if (state.currentView !== 'hashtagFeed') { state.feedScrollPosition = window.scrollY = state.posts.find(p => p.postId === postId);
            if (!post) { alert("Could not find post details."); return; }
            state.currentPostDetail = post;
            core.navigateTo('postDetail');
        },
        async blockUser(userIdToBlock) { 
            if (userIdToBlock === state.currentUser.userId) return; 
            const userToBlock = state.posts.find; } core.navigateTo('hashtagFeed'); const titleEl = document.getElementById('hashtag-title'); const feedEl = document.getElementById('hashtag-feed'); const fullHashtag = `#${tag.toLowerCase()}`; titleEl.textContent = `Posts tagged with ${fullHashtag}`; const filteredPosts = state.posts.filter(post(p => p.userId === userIdToBlock) || state.profileUser || state.blockedUsersList.find(u => u.userId === userIdToBlock); 
            const userName = userToBlock ? userToBlock.displayName : 'this user'; 
            if (confirm(`Are you sure you want to block ${userName}?`)) { 
                state.localBlocklist.add(userIdToBlock);
                localStorage.setItem(' => (post.postContent || '').toLowerCase().includes(fullHashtag)); ui.renderFeed(filteredPosts, feedEl, false); },
        async showNotifications() { ui.toggleModal('notifications', true); uilocalBlocklist', JSON.stringify(Array.from(state.localBlocklist)));
                state.posts = state.posts.filter(p => p.userId !== userIdToBlock);
                if (!state.blockedUsersList.find(u => u.userId === userIdToBlock) && userToBlock) state.blockedUsersList.renderNotifications(); if (state.unreadNotificationCount > 0) { state.unreadNotificationCount = 0.push(userToBlock);
                ui.render(); 
                try { 
                    await api.call('blockUser', { blockerId: state.currentUser.userId, blockedId: userIdToBlock }); 
                    alert(`${userName} has been blocked.`); 
                    if (state.currentView === 'profile' && state.profileUser && state.profileUser.userId === userIdToBlock) core.navigateTo('feed'); 
                ; core.updateNotificationDot(); try { await api.call('markNotificationsAsRead', { userId: state.currentUser.userId }); } catch (e) { console.error("Failed to mark notifications as read:", e); }} catch (e) { alert(`Error: Could not block user. ${e.message}`); } 
            } 
        },
        async unblockUser(userIdToUnblock, event) { 
            const } },
        async deleteNotification(notificationId) { 
            state.deletedNotificationIds.add(notificationId);
            localStorage.setItem('notificationBlacklist', JSON.stringify(Array.from(state.deletedNotification unblockBtn = event.target.closest('.unblock-btn'); if (!unblockBtn) return; unblockBtn.disabled = true; unblockBtn.textContent = 'Unblocking...'; 
            try { Ids))); 
            state.notifications = state.notifications.filter(n => n.notificationId !== notificationId
                state.localBlocklist.delete(userIdToUnblock);
                localStorage.setItem('localBlocklist); 
            ui.renderNotifications(); 
            try { await api.call('deleteNotification', { userId: state.currentUser.userId, notificationId }); } catch (e) { console.error("Could not delete notification', JSON.stringify(Array.from(state.localBlocklist)));
                state.blockedUsersList = state.blockedUsersList.filter(u => u.userId !== userIdToUnblock); 
                ui.render: " + e.message); } 
        },
        async updatePostVisibility(e) { const newVisibility = e.target.value; const selectElement = e.target; selectElement.disabled = true; trySettingsPage();
                await api.call('blockUser', { blockerId: state.currentUser.userId, blockedId: userIdToUnblock }); 
            } catch (e) { alert(`Error unblocking user: ${ { await api.call('updatePostVisibility', { userId: state.currentUser.userId, visibility: newVisibility }); state.currentUser.postVisibility = newVisibility; localStorage.setItem('currentUser', JSON.stringify(state.currentUser));e.message}`); state.localBlocklist.add(userIdToUnblock); ui.renderSettingsPage(); } } catch (err) { alert('Could not update setting: ' + err.message); selectElement.value = state.currentUser.postVisibility; } finally { selectElement.disabled = false; } },
        async updateProfile 
        },
        openReportModal(userId, postId = null) { state.reporting = { userId,Privacy(e) { const newPrivacy = e.target.checked ? 'private' : 'public'; const switch postId }; const user = state.posts.find(p => p.userId === userId) || state.profileUser; const title = document.getElementById('report-modal-title'); title.textContent = postId ? `Report post by ${user.displayName}` : `Report ${user.displayName}`; ui.toggleModal('report', true); },
Element = e.target; switchElement.disabled = true; try { await api.call('updateProfilePrivacy', { userId: state.currentUser.userId, privacy: newPrivacy }); state.currentUser.profilePrivacy = newPrivacy;        async submitReport() { const reason = document.getElementById('report-reason-input').value.trim(); if localStorage.setItem('currentUser', JSON.stringify(state.currentUser)); } catch (err) { alert('Could not update setting: ' + err.message); switchElement.checked = state.currentUser.profilePrivacy === 'private'; (!reason) { alert('Please provide a reason for the report.'); return; } ui.setButtonState('submit-report-btn', 'Submitting...', true); try { await api.call('reportUser', { reporterId } finally { switchElement.disabled = false; } },
        
        async loadMessagesView() { 
            core.navigateTo('messages'); 
            ui.renderMessagesPage(); 
            // Force fetch messages data: state.currentUser.userId, reportedId: state.reporting.userId, postId: state.reporting.postId, as well if needed
            await core.refreshFeed(false); 
        },
        
        async loadConversation(otherUserId) {
            if (state.isConversationLoading) return;
            if (state. reason: reason }); alert('Report submitted successfully.'); ui.toggleModal('report', false); } catch (e)messagePollingIntervalId) clearInterval(state.messagePollingIntervalId);
            
            const convosListEl = document.getElementById('conversations-list');
            convosListEl.classList.add('is-loading'); { alert(`Error: Could not submit report. ${e.message}`); } finally { ui.setButtonState('submit-report-btn', 'Submit Report', false); } },
        openBanModal(userId) {
            const userToBan = state.posts.find(p => p.userId === userId) || state.profile
            
            document.querySelectorAll('.conversation-item').forEach(item => {
                if (item.dataset.userId === otherUserId) {
                    item.classList.add('active');
                    const dot = item.querySelector('.unread-dot');
                    if(dot) dot.remove();
                } else {
                    itemUser;
            if (!userToBan) { alert("Could not find user information."); return; }
            state.banningUserId = userId;
            document.getElementById('ban-modal-title').textContent = `Ban ${userToBan.displayName}`;
            document.getElementById('ban-reason-input').value = '';
            ui.toggleModal('ban', true);
        },
        async submitBan() {
            const reason =.classList.remove('active');
                }
            });

            state.isConversationLoading = true;
 document.getElementById('ban-reason-input').value.trim();
            const durationHours = document.getElementById('ban-duration-select').value;
            const userIdToBan = state.banningUserId;
            if (!reason) { alert('Please provide a reason for the ban.'); return; }
            ui.setButtonState            state.currentConversation = { id: otherUserId, messages: [], isGroup: false };
            
            const convo = state('submit-ban-btn', 'Submitting...', true);
            try {
                const result = await api.call('banUser', { adminUserId: state.currentUser.userId, bannedUserId: userIdToBan, reason.conversations.find(c => c.otherUser.userId === otherUserId);
            if (convo) convo.unreadCount = 0;
            
            core.updateMessageDot();
            document.querySelector('.messages-container').classList.add('show-chat-view');
            
            const view = document.: reason, durationHours: parseInt(durationHours) });
                alert(result.message || 'User has beengetElementById('conversation-view');
            const msgList = document.getElementById('messages-list');
            
             banned successfully.');
                ui.toggleModal('ban', false); state.banningUserId = null; await core.refreshFeed(true);
            } catch (e) { alert(`Error: ${e.message}`); } finally { ui.setButtonState('submit-ban-btn', 'Submit Ban', false); }
        },if (msgList) {
                msgList.innerHTML = '<div style="display: flex; justify-content: center; align-items: center; height: 100%;"><p>Loading messages...</p>
        showHashtagFeed(tag) { if (state.currentView !== 'hashtagFeed') { state</div>';
            } else {
                view.innerHTML = '<div id="messages-list" style="display: flex; justify-content: center; align-items: center; height: 100%;"><p.feedScrollPosition = window.scrollY; } core.navigateTo('hashtagFeed'); const titleEl = document.getElementById('hashtag-title'); const feedEl = document.getElementById('hashtag-feed'); const fullHashtag = `#>Loading messages...</p></div>';
            }

            try {
                const { messages } = await api.call${tag.toLowerCase()}`; titleEl.textContent = `Posts tagged with ${fullHashtag}`; const filteredPosts = state.posts.filter(post => (post.postContent || '').toLowerCase().includes(fullHashtag('getConversationHistory', { userId: state.currentUser.userId, otherUserId, isGroup: false }, 'GET)); ui.renderFeed(filteredPosts, feedEl, false); },
        async showNotifications() { ui.');
                state.currentConversation.messages = messages.map(m => ({ ...m, status: 'sent' }));
                ui.renderConversationHistory();
                api.call('markConversationAsRead', { userId: state.currentUser.userId, otherUserId });
                state.messagePollingIntervalId = setInterval(() => handlers.pollNewMessages(otherUserId), 3000); 
            } catch (e) {
                documenttoggleModal('notifications', true); ui.renderNotifications(); if (state.unreadNotificationCount > 0) { state.unreadNotificationCount = 0; core.updateNotificationDot(); try { await api.call('markNotifications.getElementById('conversation-view').innerHTML = `<div id="conversation-placeholder" class="error-message">Could not load conversation: ${e.message}</div>`;
            } finally {
                state.isConversationLoading =AsRead', { userId: state.currentUser.userId }); } catch (e) { console.error("Failed to false;
                convosListEl.classList.remove('is-loading');
            }
        },
 mark notifications as read:", e); } } },
        async deleteNotification(notificationId) { 
            state.deletedNotificationIds.add(notificationId);
            localStorage.setItem('notificationBlacklist', JSON.stringify(        async sendMessage() {
            const input = document.getElementById('message-input');
            const messageContent = input.value.trim();
            const { id: recipientId } = state.currentConversation;
            ifArray.from(state.deletedNotificationIds))); 
            state.notifications = state.notifications.filter(n => n.notificationId !== notificationId); 
            ui.renderNotifications(); 
            try { await api (!messageContent || !recipientId) return;
            const tempId = `temp_${Date.now()}`;
            const tempMessage = { messageId: tempId, senderId: state.currentUser.userId, messageContent.call('deleteNotification', { userId: state.currentUser.userId, notificationId }); } catch (e) {, status: 'sending', senderName: state.currentUser.displayName, timestamp: new Date().toISOString() };
 console.error("Could not delete notification: " + e.message); } 
        },
        async update            input.value = ''; input.focus();
            state.currentConversation.messages.push(tempMessage);
            ui.renderConversationHistory();
            try {
                await api.call('sendMessage', { senderIdPostVisibility(e) { const newVisibility = e.target.value; const selectElement = e.target;: state.currentUser.userId, recipientId, messageContent, isGroup: false });
                setTimeout(() => handlers.pollNewMessages(recipientId), 1000);
            } catch (e) {
                 selectElement.disabled = true; try { await api.call('updatePostVisibility', { userId: state.currentUser.userId, visibility: newVisibility }); state.currentUser.postVisibility = newVisibility; localStorage.setItem('currentUser', JSON.stringify(state.currentUser)); } catch (err) { alert('Could not update setting: ' + err.message); selectElement.value = state.currentUser.postVisibility; } finally { selectElement.disabled = false; } },
        async updateProfilePrivacy(e) { const newPrivacy = e.target.checked ? 'const messageIndex = state.currentConversation.messages.findIndex(m => m.messageId === tempId);
private' : 'public'; const switchElement = e.target; switchElement.disabled = true; try { await                if (messageIndex > -1) { state.currentConversation.messages[messageIndex].status = 'failed api.call('updateProfilePrivacy', { userId: state.currentUser.userId, privacy: newPrivacy }); state.currentUser.profilePrivacy = newPrivacy; localStorage.setItem('currentUser', JSON.stringify(state.currentUser)); } catch (err) { alert('Could not update setting: ' + err.message); switchElement.checked = state.currentUser.profilePrivacy === 'private'; } finally { switchElement.disabled = false; } },
        
        '; ui.renderConversationHistory(); }
            }
        },
        async deleteMessage(messageId) { 
            if (!confirm("Unsend message?")) return; 
            const messageWrapper = document.querySelectorasync loadMessagesView() { 
            core.navigateTo('messages'); 
            ui.renderMessagesPage(); 
            // Force fetch messages data as well if needed
            await core.refreshFeed(false); 
        },
        
        async loadConversation(otherUserId) {
            if (state.isConversationLoading)(`.message-wrapper[data-message-id="${messageId}"]`); 
            if (!messageWrapper) return; 
            messageWrapper.style.opacity = '0.5'; 
            try { 
                 return;
            if (state.messagePollingIntervalId) clearInterval(state.messagePollingIntervalId);
            
            const convosListEl = document.getElementById('conversations-list');
            convosListEl.await api.call('deleteMessage', { userId: state.currentUser.userId, messageId }); 
                const messageIndex = state.currentConversation.messages.findIndex(m => m.messageId === messageId); 
                if (messageIndex > -1) state.currentConversation.messages.splice(messageIndex, 1);classList.add('is-loading');
            
            document.querySelectorAll('.conversation-item').forEach(item => 
                messageWrapper.remove(); 
            } catch (e) { 
                alert(`Error: {
                if (item.dataset.userId === otherUserId) {
                    item.classList.add('active');
                    const dot = item.querySelector('.unread-dot');
                    if(dot) dot.remove();
                } else {
                    item.classList.remove('active');
                }
            });

            state.isConversationLoading = true;
            state.currentConversation = { id: otherUserId, messages: [], is ${e.message}`); 
                messageWrapper.style.opacity = '1'; 
            } 
        },
        async pollNewMessages(otherUserId) {
            if (state.currentView !== 'messages' || state.currentConversation.id !== otherUserId) { if (state.messagePollingIntervalId) clearInterval(Group: false };
            
            const convo = state.conversations.find(c => c.otherUser.userId === otherstate.messagePollingIntervalId); return; }
            try {
                const { messages: remoteMessages } =UserId);
            if (convo) convo.unreadCount = 0;
            
            core.updateMessageDot();
            document.querySelector('.messages-container').classList.add('show-chat-view');
 await api.call('getConversationHistory', { userId: state.currentUser.userId, otherUserId, isGroup:            
            const view = document.getElementById('conversation-view');
            const msgList = document.getElementById('messages-list');
            
            if (msgList) {
                msgList.innerHTML = '<div style="display: flex; justify-content: center; align-items: center; height: 100%; false }, 'GET');
                const newMessagesFormatted = remoteMessages.map(m => ({ ...m, status: 'sent' }));
                
                const pendingMessages = state.currentConversation.messages.filter(m =>"><p>Loading messages...</p></div>';
            } else {
                view.innerHTML = '<div id m.status === 'sending' || m.status === 'failed');
                state.currentConversation.messages = [...newMessagesFormatted, ...pendingMessages];
                ui.renderConversationHistory();
                api.call('mark="messages-list" style="display: flex; justify-content: center; align-items: center; height: 100%;"><p>Loading messages...</p></div>';
            }

            try {
                // Fetch directly from data aggregator (API/TSV) instead of just local state update
                const { messagesConversationAsRead', { userId: state.currentUser.userId, otherUserId });
            } catch (e) { logger.warn("Polling", "Poll failed", e.message); }
        },
        async startConversationFrom } = await api.call('getConversationHistory', { userId: state.currentUser.userId, otherUserId, isGroup: false }, 'GET');
                state.currentConversation.messages = messages.map(m => ({ ...m, status: 'sent'Profile(otherUserId) { core.navigateTo('messages'); const existingConvo = state.conversations.find(c => c.otherUser.userId === otherUserId); if (!existingConvo && state.profileUser && state.profileUser.userId === otherUserId) { const newConvo = { otherUser: { userId: state.profileUser.userId, displayName: state.profileUser.displayName, profilePictureUrl: state.profileUser.profile }));
                ui.renderConversationHistory();
                api.call('markConversationAsRead', { userId: state.currentUser.userId, otherUserId });
                state.messagePollingIntervalId = setInterval(() => handlers.pollNewPictureUrl, isVerified: state.profileUser.isVerified }, lastMessage: '', timestamp: new Date().toISOString(), unreadCount: 0 }; state.conversations.unshift(newConvo); } await handlers.loadConversation(otherUserId, false); }
    };

    const core = {
        navigateTo(view) {
            if (state.currentView === 'messages' && view !== 'messages') { if (state.messageMessages(otherUserId), 3000); 
            } catch (e) {
                document.PollingIntervalId) clearInterval(state.messagePollingIntervalId); state.messagePollingIntervalId = null; state.getElementById('conversation-view').innerHTML = `<div id="conversation-placeholder" class="error-message">Could not load conversation: ${e.message}</div>`;
            } finally {
                state.isConversationLoading = false;
                convosListEl.classList.remove('is-loading');
            }
        },
        currentConversation.id = null; document.querySelector('.messages-container').classList.remove('show-chat-view'); }
            if (state.backgroundPosts) { state.posts = state.backgroundPosts; state.backgroundPosts = null; }
            state.currentView = view;
            ui.render();
            if (view === 'feed') setTimeout(() => window.scrollTo(0, state.feedScrollPosition), 0); elseasync sendMessage() {
            const input = document.getElementById('message-input');
            const messageContent = input.value.trim();
            const { id: recipientId } = state.currentConversation;
            if (! window.scrollTo(0, 0);
            if (['feed', 'profile'].includes(view)) core.refreshFeed(false); 
        },
        async refreshFeed(showLoader = true) {
            if (showLoader && state.currentView === 'feed') {
                const activeFeedEl = state.currentFeedType === 'foryou' ? document.getElementById('foryou-feed') : document.getElementById('following-feed');
                ui.showFeedSkeleton(activeFeedEl);
            }
            try {
messageContent || !recipientId) return;
            const tempId = `temp_${Date.now()}`;
            const tempMessage = { messageId: tempId, senderId: state.currentUser.userId, messageContent,                const [postsAndConvosResult, notificationsResult] = await Promise.all([
                    api.call('getPosts', { userId: state.currentUser.userId }, 'GET'),
                    api.call('getNotifications', status: 'sending', senderName: state.currentUser.displayName, timestamp: new Date().toISOString() };
            input.value = ''; input.focus();
            state.currentConversation.messages.push(tempMessage);
 { userId: state.currentUser.userId }, 'GET')
                ]);
                const { posts = [], conversations = [], currentUserFollowingList = [], currentUserFollowersList = [], blockedUsersList = [], currentUserData = null, bannerText            ui.renderConversationHistory();
            try {
                await api.call('sendMessage', { senderId: = '', photoLibrary = [] } = postsAndConvosResult || {};
                const banner = document.getElementById('global-banner');
                const root = document.documentElement;
                if (bannerText) { banner.textContent state.currentUser.userId, recipientId, messageContent, isGroup: false });
                setTimeout(() => handlers.pollNewMessages(recipientId), 1000);
            } catch (e) {
                const = bannerText; banner.classList.remove('hidden'); setTimeout(() => root.style.setProperty('--banner-height', `${banner.offsetHeight}px`), 0); }
                else { banner.classList.add('hidden'); root.style.setProperty('--banner-height', '0px'); }

                if (currentUserData) {
 messageIndex = state.currentConversation.messages.findIndex(m => m.messageId === tempId);
                if (messageIndex > -1) { state.currentConversation.messages[messageIndex].status = 'failed';                    if (currentUserData.isSuspended === 'OUTAGE') { 
                        // Do not logout, just navigate
                        return core.navigateTo('outage'); 
                    }
                    if (currentUserData.banDetails ui.renderConversationHistory(); }
            }
        },
        async deleteMessage(messageId) { 
            if (!confirm("Unsend message?")) return; 
            const messageWrapper = document.querySelector(`.) { ui.renderBanPage(currentUserData.banDetails); return core.navigateTo('suspended'); }
                    state.currentUser = currentUserData;
                    state.userProfileCache[currentUserData.userId] = currentUserData;message-wrapper[data-message-id="${messageId}"]`); 
            if (!messageWrapper) return; 
            messageWrapper.style.opacity = '0.5'; 
            try { 
                await api.call('deleteMessage', { userId: state.currentUser.userId, messageId }); 
                const messageIndex = state.currentConversation.messages.findIndex(m => m.messageId === messageId); 
                
                    localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
                    const navPfp = documentif (messageIndex > -1) state.currentConversation.messages.splice(messageIndex, 1); 
                messageWrapper.remove(); 
            } catch (e) { 
                alert(`Error: ${.getElementById('nav-pfp');
                    if (navPfp) navPfp.src = sanitizeHTML(state.currentUser.profilePictureUrl) || `https://api.dicebear.com/8.x/thumbs/svg?seed=${state.currentUser.username}`;
                    document.getElementById('logout-button-container').style.display = 'flex';
                }

                applyOptimisticUpdates(posts);

                let combinedPostse.message}`); 
                messageWrapper.style.opacity = '1'; 
            } 
        },
        async pollNewMessages(otherUserId) {
            if (state.currentView !== 'messages' || state.currentConversation.id !== otherUserId) { if (state.messagePollingIntervalId) clearInterval(state = [...posts];
                // Local Pending Posts merge handled inside getPosts now for de-duplication safety
                // We re-check here just in case getPosts logic missed purely new local items if feed fetch failed partially
                .messagePollingIntervalId); return; }
            try {
                const { messages: remoteMessages } = await api.call('getConversationHistory', { userId: state.currentUser.userId, otherUserId, isGroup: falseif (state.localPendingPosts && state.localPendingPosts.length > 0) {
                    const postIdsInFeed = new Set(posts.map(p => p.postId));
                    const missingPending = state.localPendingPosts.filter(lp => !postIdsInFeed.has(lp.postId));
                    combinedPosts = [...missingPending, ...combinedPosts];
                }

                state.posts = combinedPosts;
                 }, 'GET');
                const newMessagesFormatted = remoteMessages.map(m => ({ ...m, status: 'sent' }));
                
                const pendingMessages = state.currentConversation.messages.filter(m => mstate.conversations = conversations;
                state.currentUserFollowingList = currentUserFollowingList;
                state.currentUser.status === 'sending' || m.status === 'failed');
                state.currentConversation.messages = [...newMessagesFormatted, ...pendingMessages];
                ui.renderConversationHistory();
                api.call('markConversationFollowersList = currentUserFollowersList || [];
                state.blockedUsersList = blockedUsersList || [];
                state.photoLibrary = photoLibrary; 
                let { notifications } = notificationsResult || { notifications: [] };
                notifications = notifications.filter(n => !state.deletedNotificationIds.has(n.notificationIdAsRead', { userId: state.currentUser.userId, otherUserId });
            } catch (e) { logger.warn("Polling", "Poll failed", e.message); }
        },
        async startConversationFromProfile(otherUserId) { core.navigateTo('messages'); const existingConvo = state.conversations.find(c));
                state.notifications = notifications;
                state.unreadNotificationCount = notifications.filter(n => String(n.isRead).toUpperCase() !== 'TRUE').length;

                this.updateNotificationDot();
                 => c.otherUser.userId === otherUserId); if (!existingConvo && state.profileUser && state.profileUser.userId === otherUserId) { const newConvo = { otherUser: { userId: state.profilethis.updateMessageDot();
                state.freshDataLoaded = true;
                const messagesNavBtn = document.getElementById('messages-btn');
                if (messagesNavBtn) { messagesNavBtn.style.opacity =User.userId, displayName: state.profileUser.displayName, profilePictureUrl: state.profileUser.profilePictureUrl, isVerified: state.profileUser.isVerified }, lastMessage: '', timestamp: new Date().toISOString(), unreadCount: 0 }; state.conversations.unshift(newConvo); } await handlers.loadConversation '1'; messagesNavBtn.style.pointerEvents = 'auto'; messagesNavBtn.title = ''; }
            } catch (e) {
                console.error("Feed refresh error:", e);
                if (state.currentView === 'feed') document.getElementById('foryou-feed').innerHTML = `<p class="error(otherUserId, false); }
    };

    const core = {
        navigateTo(view) {
            if (state.currentView === 'messages' && view !== 'messages') { if (state.messagePolling-message">Could not load feed: ${e.message}</p>`;
                if (e.message.includesIntervalId) clearInterval(state.messagePollingIntervalId); state.messagePollingIntervalId = null; state.currentConversation.id = null; document.querySelector('.messages-container').classList.remove('show-chat-view');("validate user session")) setTimeout(() => core.logout(), 2000);
            } finally {
                if (state.currentView === 'feed') {
                    // Logic to render active tab without resetting state
 }
            if (state.backgroundPosts) { state.posts = state.backgroundPosts; state.backgroundPosts                    const isForYou = state.currentFeedType === 'foryou';
                    const activeFeedEl = document.getElementById(isForYou ? 'foryou-feed' : 'following-feed');
                    const = null; }
            state.currentView = view;
            ui.render();
            if (view === 'feed') setTimeout(() => window.scrollTo(0, state.feedScrollPosition), 0); else window inactiveFeedEl = document.getElementById(isForYou ? 'following-feed' : 'foryou-feed.scrollTo(0, 0);
            if (['feed', 'profile'].includes(view)) core.');
                    
                    ui.renderFeed(state.posts, activeFeedEl, true);
                    inactiveFeedEl.innerHTML = ''; // Ensure other feed is empty
                } else if (['profile', 'hashtagFeed',refreshFeed(false); 
        },
        async refreshFeed(showLoader = true) {
            if (showLoader && state.currentView === 'feed') {
                const activeFeedEl = state.currentFeedType === 'foryou' ? document.getElementById('foryou-feed') : document.getElementById('following 'messages', 'settings', 'search', 'createPost', 'postDetail'].includes(state.currentView))-feed');
                ui.showFeedSkeleton(activeFeedEl);
            }
            try {
                 ui.render();
            }
        },
        updateNotificationDot() { document.getElementById('notification-dot').style.display = state.unreadNotificationCount > 0 ? 'block' : 'none'; },
        updateMessageDot() { const hasUnread = state.conversations.some(c => c.unreadCount >const [postsAndConvosResult, notificationsResult] = await Promise.all([
                    api.call('getPosts', { userId: state.currentUser.userId }, 'GET'),
                    api.call('getNotifications', { 0); document.getElementById('message-dot').style.display = hasUnread ? 'block' : ' userId: state.currentUser.userId }, 'GET')
                ]);
                const { posts = [], conversations = [], currentUserFollowingList = [], currentUserFollowersList = [], blockedUsersList = [], currentUserData = null, bannerText =none'; },
        logout(forceReload = true) { localStorage.removeItem('currentUser'); state.currentUser = null; if (state.backgroundRefreshIntervalId) clearInterval(state.backgroundRefreshIntervalId); if (state.message '', photoLibrary = [] } = postsAndConvosResult || {};
                const banner = document.getElementById('globalPollingIntervalId) clearInterval(state.messagePollingIntervalId); if (forceReload) window.location.reload();-banner');
                const root = document.documentElement;
                if (bannerText) { banner.textContent = bannerText; banner.classList.remove('hidden'); setTimeout(() => root.style.setProperty('--banner-height', `${banner.offsetHeight}px`), 0); }
                else { banner.classList.add('hidden'); root },
        setupEventListeners() {
            // ... existing listeners ...
            let searchTimeout;
            document.getElementById('show-register-link').addEventListener('click', () => { document.getElementById('login-form').classList.add('hidden'); document.getElementById('register-form').classList.remove('hidden'); });
            document.getElementById('show-login-link').addEventListener('click', () => { document.getElementById('register-form').classList.style.setProperty('--banner-height', '0px'); }

                if (currentUserData) {
                    .add('hidden'); document.getElementById('login-form').classList.remove('hidden'); });
            document.getElementById('login-btn').addEventListener('click', handlers.login); document.getElementById('register-btn').addEventListener('if (currentUserData.isSuspended === 'OUTAGE') { 
                        // Do not logout, just navigate
                        return core.navigateTo('outage'); 
                    }
                    if (currentUserData.banDetails) { ui.renderBanPage(currentUserData.banDetails); return core.navigateTo('suspended'); }
                    stateclick', handlers.register); document.getElementById('submit-post-btn').addEventListener('click', handlers.createPost.currentUser = currentUserData;
                    state.userProfileCache[currentUserData.userId] = currentUserData;
                    localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
                    const navPfp = document.); document.getElementById('save-profile-btn').addEventListener('click', handlers.updateProfile);
            
            // Home button -getElementById('nav-pfp');
                    if (navPfp) navPfp.src = sanitizeHTML(state.currentUser.profilePictureUrl) || `https://api.dicebear.com/8.x/thumbs click to scroll to top if already on feed
            document.getElementById('logo-btn').addEventListener('click', () => {
                if (state.currentView === 'feed') window.scrollTo({ top: 0, behavior/svg?seed=${state.currentUser.username}`;
                    document.getElementById('logout-button-container').style: 'smooth' });
                else core.navigateTo('feed');
            });
            document.getElementById('home-btn').addEventListener('click', () => {
                if (state.currentView === 'feed') window..display = 'flex';
                }

                applyOptimisticUpdates(posts);

                state.posts = posts;
                state.conversations = conversations;
                state.currentUserFollowingList = currentUserFollowingList;
                state.currentUserFollowscrollTo({ top: 0, behavior: 'smooth' });
                else core.navigateTo('feed');
            ersList = currentUserFollowersList || [];
                state.blockedUsersList = blockedUsersList || [];
                state.photoLibrary = photoLibrary; 
                let { notifications } = notificationsResult || { notifications: [] };});

            document.getElementById('profile-nav-btn').addEventListener('click', (e) => {
                
                notifications = notifications.filter(n => !state.deletedNotificationIds.has(n.notificationId));const isMobile = window.innerWidth <= 1023;
                if (isMobile) {
                    e.preventDefault(); e.stopPropagation(); ui.renderProfileShortcutModal();
                    const rect = e.currentTarget.getBoundingClientRect();
                    const bottomPos = (window.innerHeight - rect.top) + 10; 
                state.notifications = notifications;
                state.unreadNotificationCount = notifications.filter(n => String(n.isRead).toUpperCase() !== 'TRUE').length;

                this.updateNotificationDot();
                this
                    const rightPos = (window.innerWidth - rect.right); 
                    const position = { bottom: bottomPos, right: rightPos < 10 ? 10 : rightPos };
                    ui.toggleModal('profileShortcut', true, position);
                } else handlers.showProfile(state.currentUser.userId);.updateMessageDot();
                state.freshDataLoaded = true;
                const messagesNavBtn = document.
            });
            document.getElementById('clear-notifications-btn').addEventListener('click', handlers.clearAllNotificationsgetElementById('messages-btn');
                if (messagesNavBtn) { messagesNavBtn.style.opacity = '1'; messagesNavBtn.style.pointerEvents = 'auto'; messagesNavBtn.title = ''; }
            } catch (e) {
                console.error("Feed refresh error:", e);
                if (state.currentView === 'feed') document.getElementById('foryou-feed').innerHTML = `<p class="error-);
            document.getElementById('settings-nav-btn').addEventListener('click', () => core.navigateTo('settingsmessage">Could not load feed: ${e.message}</p>`;
                if (e.message.includes("'));
            document.getElementById('search-btn').addEventListener('click', () => core.navigateTo('search'));
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.addEventListener('input', (e) => {
                    clearTimeout(searchTimeout);
                    const query = e.validate user session")) setTimeout(() => core.logout(), 2000);
            } finally {
                if (state.currentView === 'feed') {
                    // Logic to render active tab without resetting state
                    target.value.trim();
                    state.search.query = query;
                    if (query.length ===const isForYou = state.currentFeedType === 'foryou';
                    const activeFeedEl = document.getElementById(isForYou ? 'foryou-feed' : 'following-feed');
                    const inactive 0) { state.search.results = null; state.search.isLoading = false; ui.renderSearchView(); } 
                    else if (query.length >= 2) { state.search.isLoading = true;FeedEl = document.getElementById(isForYou ? 'following-feed' : 'foryou-feed');
                    
                    ui.renderFeed(state.posts, activeFeedEl, true);
                    inactiveFeedEl ui.renderSearchView(); searchTimeout = setTimeout(() => handlers.search(query), 300); }
.innerHTML = ''; // Ensure other feed is empty
                } else if (['profile', 'hashtagFeed', 'messages', 'settings', 'search', 'createPost', 'postDetail'].includes(state.currentView)) ui                });
            }
            document.getElementById('notifications-btn').addEventListener('click', handlers.showNotifications);
            document.getElementById('messages-btn').addEventListener('click', () => handlers.loadMessagesView());
            .render();
            }
        },
        updateNotificationDot() { document.getElementById('notification-dot').style.display = state.unreadNotificationCount > 0 ? 'block' : 'none'; },
        updateMessageDot() { const hasUnread = state.conversations.some(c => c.unreadCount > document.querySelectorAll('.close-modal-btn').forEach(btn => btn.addEventListener('click', (e) => { const modal = e.target.closest('.modal'); if (modal) { const modalName = modal.id.replace('-modal', '').replace(/-(\w)/g, (match, p1) => p1.toUpperCase()); ui.toggleModal(modalName, false); } }));
            document.getElementById('logout-btn').0); document.getElementById('message-dot').style.display = hasUnread ? 'block' : 'none'; },
        logout(forceReload = true) { localStorage.removeItem('currentUser'); state.currentUser = null;addEventListener('click', core.logout);
            document.getElementById('outage-logout-btn').addEventListener('click', core.logout);
            document.getElementById('theme-switch').addEventListener('change', (e) => { const newTheme = e.target.checked ? 'dark' : 'light'; document.documentElement.setAttribute('data if (state.backgroundRefreshIntervalId) clearInterval(state.backgroundRefreshIntervalId); if (state.messagePollingIntervalId) clearInterval(state.messagePollingIntervalId); if (forceReload) window.location.reload(); },
        setupEventListeners() {
            // ... existing listeners ...
            let searchTimeout;
            document.getElementById-theme', newTheme); localStorage.setItem('theme', newTheme); });
            document.getElementById('back-to-profile-btn').addEventListener('click', () => { handlers.showProfile(state.profileUser.userId('show-register-link').addEventListener('click', () => { document.getElementById('login-form').classList.add('hidden'); document.getElementById('register-form').classList.remove('hidden'); });
            document.getElementById('show-login-link').addEventListener('click', () => { document.getElementById('register-form').classList.add('hidden'); document.getElementById('login-form').classList.remove('hidden'); });
            document.getElementById) });
            document.getElementById('post-visibility-select').addEventListener('change', handlers.updatePostVisibility);('login-btn').addEventListener('click', handlers.login); document.getElementById('register-btn').addEventListener('click
            document.getElementById('privacy-switch').addEventListener('change', handlers.updateProfilePrivacy);
            document.', handlers.register); document.getElementById('submit-post-btn').addEventListener('click', handlers.createPost); document.getElementById('save-profile-btn').addEventListener('click', handlers.updateProfile);
            document.getElementById('logo-btn').addEventListener('click', () => core.navigateTo('feed'));
            document.getElementById('homegetElementById('add-image-btn').addEventListener('click', () => ui.toggleModal('imageUrl', true));
            document.getElementById('image-url-modal-done-btn').addEventListener('click', () => { const url-btn').addEventListener('click', () => core.navigateTo('feed'));
            document.getElementById('profile-nav-btn').addEventListener('click', (e) => {
                const isMobile = window.innerWidth <= 1023;
                if (isMobile) {
                    e.preventDefault(); e.stopPropagation(); ui. = document.getElementById('image-url-modal-input').value.trim(); if (url) { if (renderProfileShortcutModal();
                    const rect = e.currentTarget.getBoundingClientRect();
                    const bottomPos = (window.innerHeight - rect.top) + 10; 
                    const rightPos = (window.innerWidthstate.pendingCommentImagePostId) { state.pendingCommentImages[state.pendingCommentImagePostId] = url; state.pendingCommentImagePostId = null; ui.render(); } else { state.postImageUrl = - rect.right); 
                    const position = { bottom: bottomPos, right: rightPos < 1 url; state.postVideoUrl = null; ui.renderImagePreview(); } } document.getElementById('image-url-modal-input').value = ''; ui.toggleModal('imageUrl', false); });
            document.getElementById('add-video-btn').addEventListener('click', () => ui.toggleModal('videoUrl', true));
            document.getElementById('video-url-modal-done-btn').addEventListener('click', () => { const url0 ? 10 : rightPos };
                    ui.toggleModal('profileShortcut', true, position);
                } else handlers.showProfile(state.currentUser.userId);
            });
            document.getElementById('clear = document.getElementById('video-url-modal-input').value.trim(); if (url) { state.-notifications-btn').addEventListener('click', handlers.clearAllNotifications);
            document.getElementById('settings-nav-btn').addEventListener('click', () => core.navigateTo('settings'));
            document.getElementById('search-btnpostVideoUrl = url; state.postImageUrl = null; ui.renderImagePreview(); } document.getElementById('').addEventListener('click', () => core.navigateTo('search'));
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.addEventListener('input', (e) => {
video-url-modal-input').value = ''; ui.toggleModal('videoUrl', false); });
            document.getElementById('register-tos').addEventListener('change', (e) => { document.getElementById('register-btn                    clearTimeout(searchTimeout);
                    const query = e.target.value.trim();
                    state.search.query = query;
                    if (query.length === 0) { state.search.results =').disabled = !e.target.checked; });
            document.getElementById('submit-report-btn').addEventListener('click', handlers.submitReport);
            document.getElementById('submit-ban-btn').addEventListener('click', null; state.search.isLoading = false; ui.renderSearchView(); } 
                    else if (query.length >= 2) { state.search.isLoading = true; ui.renderSearchView(); searchTimeout = setTimeout(() => handlers.search(query), 300); }
                });
            }
            document.getElementById handlers.submitBan);
            document.getElementById('create-post-form').addEventListener('click', (e) => { if (e.target.id === 'remove-image-btn') { state.postImageUrl = null; state.postVideoUrl = null; ui.renderImagePreview(); } });
            document.getElementById('notifications-list').addEventListener('click', (e) => { const item = e.target.closest('.notification-item'); if (!item) return; if (e.target.closest('.delete-notification-btn')) { handlers.deleteNotification(item.dataset.notificationId); return; } const clickableArea = e.target.closest('.notification-item-clickable'); if (clickableArea) { ui.toggleModal('notifications', false); const notification = state('notifications-btn').addEventListener('click', handlers.showNotifications);
            document.getElementById('messages-btn').addEventListener('click', () => handlers.loadMessagesView());
            document.querySelectorAll('.close-modal-btn').forEach(btn => btn.addEventListener('click', (e) => { const modal = e.target.closest('.modal'); if (modal) { const modalName = modal.id.replace('-modal', '').replace(/-(\.notifications.find(n => n.notificationId === item.dataset.notificationId); if (!notification) return; if (notification.postAuthorId && notification.postId && notification.postId !== 'null') handlers.showProfile(notification.postAuthorId, notification.postId); else if (notification.actorUserId) handlers.showProfile(notification.actorUserId); } });
            document.getElementById('edit-profile-view').addEventListener('click', e => { const choice = e.target.closest('#pfp-choices-gallery img'); if (choice) {w)/g, (match, p1) => p1.toUpperCase()); ui.toggleModal(modalName, false); } }));
            document.getElementById('logout-btn').addEventListener('click', core.logout);
             document.getElementById('edit-pfp-url').value = choice.dataset.url; document.querySelectorAll('#pdocument.getElementById('outage-logout-btn').addEventListener('click', core.logout);
            document.getElementById('theme-switch').addEventListener('change', (e) => { const newTheme = e.target.checked ?fp-choices-gallery img').forEach(img => img.classList.remove('selected')); choice.classList.add('selected'); } });
            document.body.addEventListener('input', (e) => { if (e.target.matches('.comment-form input')) { const postId = e.target.closest('.post').dataset.postId 'dark' : 'light'; document.documentElement.setAttribute('data-theme', newTheme); localStorage.setItem('theme', newTheme); });
            document.getElementById('back-to-profile-btn').addEventListener('click', () => { handlers.showProfile(state.profileUser.userId) });
            document.getElementById('post-visibility-select').addEventListener('change', handlers.updatePostVisibility);
            document.getElementById('privacy-switch').addEventListener('change', handlers.updateProfilePrivacy);
            document.getElementById('add-image-btn').addEventListener('click', () => ui.toggleModal('imageUrl', true));
            document.getElementById('image-url-modal-done-btn').addEventListener('click', () => { const url = document.getElementById('image-url-modal; state.pendingCommentDrafts[postId] = e.target.value; } });
            
            // Feed Tabs Logic
            document.querySelectorAll('.feed-nav-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    const feedType = tab.dataset.feedType;
                    if (-input').value.trim(); if (url) { if (state.pendingCommentImagePostId) { state.pendingCommentImages[state.pendingCommentImagePostId] = url; state.pendingCommentImagePostId = null; ui.render(); } else { state.postImageUrl = url; state.postVideoUrl = null;state.currentFeedType === feedType) return;
                    state.currentFeedType = feedType;
                    document.querySelectorAll('.feed-nav-tab').forEach(t => t.classList.remove('active')); tab. ui.renderImagePreview(); } } document.getElementById('image-url-modal-input').value = ''; ui.toggleModal('imageUrl', false); });
            document.getElementById('add-video-btn').addEventListener('click', () => ui.toggleModal('videoUrl', true));
            document.getElementById('video-url-modalclassList.add('active');
                    const container = document.getElementById('feed-container');
                    
                    // Specific Logic for Tab Switch
                    const activeFeedEl = document.getElementById(feedType === 'foryou'-done-btn').addEventListener('click', () => { const url = document.getElementById('video-url-modal ? 'foryou-feed' : 'following-feed');
                    const inactiveFeedEl = document.getElementById-input').value.trim(); if (url) { state.postVideoUrl = url; state.postImageUrl(feedType === 'foryou' ? 'following-feed' : 'foryou-feed');
 = null; ui.renderImagePreview(); } document.getElementById('video-url-modal-input').value =                    
                    if (activeFeedEl.innerHTML.trim() === '') ui.renderFeed(state.posts, activeFeedEl, true);
                    
                    if (feedType === 'following') { 
                        container.style.transform = 'translateX(-50%)'; 
                    } else { 
                        container.style. ''; ui.toggleModal('videoUrl', false); });
            document.getElementById('register-tos').addEventListener('transform = 'translateX(0)'; 
                    }
                });
            });

            document.getElementById('open-create-post-btn').addEventListener('click', () => core.navigateTo('createPost'));
            document.body.addEventListener('click', (e) => {
                const target = e.target;
                const backBtn = target.closest('[data-nav-back]');
                if (backBtn) { e.preventDefault(); core.navigateTo(state.previousView || 'feed'); return; }
                if (!modals.profileShortcut.classList.contains('hidden') && !target.closest('#profile-shortcut-modal .modal-content') &&change', (e) => { document.getElementById('register-btn').disabled = !e.target.checked; });
            document.getElementById('submit-report-btn').addEventListener('click', handlers.submitReport);
            document.getElementById('submit-ban-btn').addEventListener('click', handlers.submitBan);
            document.getElementById('create-post-form').addEventListener('click', (e) => { if (e.target.id === 'remove-image-btn') { state.postImageUrl = null; state.postVideoUrl = null; ui !target.closest('#profile-nav-btn')) ui.toggleModal('profileShortcut', false);
                const optionsBtn = target.closest('.options-btn');
                if (optionsBtn) { e.preventDefault(); const menu = optionsBtn.nextElementSibling; const isHidden = menu.classList.contains('hidden'); document.querySelectorAll('.options-menu').forEach(m => m.classList.add('hidden')); if (isHidden) menu.classList.remove('hidden'); return; }
                if (!target.closest('.options-menu')) document.querySelectorAll('.options.renderImagePreview(); } });
            document.getElementById('notifications-list').addEventListener('click', (e) => { const item = e.target.closest('.notification-item'); if (!item) return; if (e-menu').forEach(m => m.classList.add('hidden'));
                const actionButton = target.closest('[data-action]');
                if (actionButton) {
                    const profileShortcutModal = target.closest('#.target.closest('.delete-notification-btn')) { handlers.deleteNotification(item.dataset.notificationId); return; } const clickableArea = e.target.closest('.notification-item-clickable'); if (clickableArea) { ui.toggleModal('notifications', false); const notification = state.notifications.find(n => n.notificationprofile-shortcut-modal');
                    if (profileShortcutModal) {
                        const action = actionButton.dataset.action;
                        if (action === 'go-to-profile') { e.preventDefault(); const userId = actionButton.dataset.userId; ui.toggleModal('profileShortcut', false); handlers.showProfile(userId); }
                        else if (action === 'go-to-settings') { e.preventDefault(); ui.toggleModalId === item.dataset.notificationId); if (!notification) return; if (notification.postAuthorId && notification.postId && notification.postId !== 'null') handlers.showProfile(notification.postAuthorId, notification.postId); else if (notification.actorUserId) handlers.showProfile(notification.actorUserId); } });
            document.getElementById('edit-profile-view').addEventListener('click', e => { const choice = e.target.closest('profileShortcut', false); core.navigateTo('settings'); }
                        return;
                    }
                    const action = actionButton.dataset.action; const postEl = actionButton.closest('.post'); const commentEl = action('#pfp-choices-gallery img'); if (choice) { document.getElementById('edit-pfp-url').value = choice.dataset.url; document.querySelectorAll('#pfp-choices-gallery img').forEach(imgButton.closest('.comment');
                    if (action === 'delete-post') handlers.deletePost(postEl.dataset.postId);
                    else if (action === 'delete-comment') handlers.deleteComment(commentEl => img.classList.remove('selected')); choice.classList.add('selected'); } });
            document.body.addEventListener('input', (e) => { if (e.target.matches('.comment-form input')) {.dataset.commentId);
                    else if (action === 'edit-post') handlers.enterEditMode(postEl.dataset.postId);
                    else if (action === 'delete-message') handlers.deleteMessage(actionButton.dataset.messageId);
                    else if (action === 'block-user') handlers.blockUser const postId = e.target.closest('.post').dataset.postId; state.pendingCommentDrafts[postId] = e.target.value; } });
            
            // Feed Tabs Logic
            document.querySelectorAll('.feed(actionButton.dataset.userId);
                    else if (action === 'unblock-user') handlers.un-nav-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    const feedType = tab.dataset.feedType;
                    if (state.currentFeedType === feedType) returnblockUser(actionButton.dataset.userId, e);
                    else if (action === 'report-post') handlers.openReportModal(postEl.dataset.userId, postEl.dataset.postId);
                    else if;
                    state.currentFeedType = feedType;
                    document.querySelectorAll('.feed-nav-tab').forEach(t => t.classList.remove('active')); tab.classList.add('active');
                    const container (action === 'report-user') handlers.openReportModal(actionButton.dataset.userId);
                    else if (action === 'ban-user') handlers.openBanModal(actionButton.dataset.userId);
                     = document.getElementById('feed-container');
                    
                    // Specific Logic for Tab Switch
                    const activeFeedEl = document.getElementById(feedType === 'foryou' ? 'foryou-feed' : 'following-feed');
                    const inactiveFeedEl = document.getElementById(feedType === 'foryou' ? 'following-feed' : 'else if (action === 'add-comment-image') handlers.promptCommentImage(actionButton.dataset.postId);
                    else if (action === 'remove-comment-image') handlers.removeCommentImage(actionButton.foryou-feed');
                    
                    if (activeFeedEl.innerHTML.trim() === '') ui.renderFeed(state.posts, activeFeedEl, true);
                    
                    if (feedType === 'followingdataset.postId);
                    else if (action === 'view-post') handlers.showPostDetail(actionButton.dataset.postId);
                    return;
                }
                if (target.closest('[data-nav="') { 
                        container.style.transform = 'translateX(-50%)'; 
                    } else { 
                        container.style.transform = 'translateX(0)'; 
                    }
                });
            });feed"]')) { e.preventDefault(); return core.navigateTo('feed'); }
                const hashtagLink = target.closest('.hashtag-link'); if (hashtagLink) { e.preventDefault(); handlers.showHashtagFeed(

            document.getElementById('open-create-post-btn').addEventListener('click', () => core.navigateTo('hashtagLink.dataset.hashtag); return; }
                const profileLink = target.closest('.post-header,createPost'));
            document.body.addEventListener('click', (e) => {
                const target = e.target;
                const backBtn = target.closest('[data-nav-back]');
                if (back .comment-header-main, .search-result-user, #conversation-header .profile-link, #settings-profile-link');
                if (profileLink && !target.closest('.post-options')) {
Btn) { e.preventDefault(); core.navigateTo(state.previousView || 'feed'); return; }
                if (!modals.profileShortcut.classList.contains('hidden') && !target.closest('#profile-shortcut-                    const userElement = profileLink.closest('[data-user-id]');
                    if (userElement && userElement.dataset.userId) {
                        if (state.currentView === 'search') { document.getElementById('modal .modal-content') && !target.closest('#profile-nav-btn')) ui.toggleModal('profilesearch-input').value = ''; state.search = { query: '', results: null, isLoading: false }; }
                        handlers.showProfile(userElement.dataset.userId); return;
                    }
                }
                Shortcut', false);
                const optionsBtn = target.closest('.options-btn');
                if (optionsBtn) { e.preventDefault(); const menu = optionsBtn.nextElementSibling; const isHidden = menu.classList.containsif (target.closest('#edit-profile-btn')) return core.navigateTo('editProfile');
                if (('hidden'); document.querySelectorAll('.options-menu').forEach(m => m.classList.add('hidden')); if (isHidden) menu.classList.remove('hidden'); return; }
                if (!target.closest('.options-target.closest('#follow-btn')) return handlers.toggleFollow(state.profileUser.userId);
                constmenu')) document.querySelectorAll('.options-menu').forEach(m => m.classList.add('hidden'));
                const actionButton = target.closest('[data-action]');
                if (actionButton) {
                    const profile likeBtn = target.closest('.like-btn'); if (likeBtn) return handlers.toggleLike(target.closest('.post').dataset.postId);
                if (target.closest('#message-user-btn')) return handlers.startConversationFromProfile(state.profileUser.userId);
                const conversationItem = target.closest('.conversation-item'); if (conversationItem) { const otherUserId = conversationItem.dataset.userId; if (otherUserId && otherUserId !== state.currentConversation.id) handlers.loadConversation(otherUserId); return; }
                const backToConvosBtn = target.closest('#back-to-convos-btn'); if (backToConvosBtn) { document.querySelector('.messages-container').classList.remove('show-chat-view'); ifShortcutModal = target.closest('#profile-shortcut-modal');
                    if (profileShortcutModal) {
                        const action = actionButton.dataset.action;
                        if (action === 'go-to-profile') { e.preventDefault(); const userId = actionButton.dataset.userId; ui.toggleModal('profileShortcut', false); handlers.showProfile(userId); }
                        else if (action === 'go-to-settings') { e.preventDefault(); ui.toggleModal('profileShortcut', false); core.navigateTo('settings'); }
                        return;
                    }
                    const action = actionButton.dataset.action; const postEl = actionButton.closest('.post'); const commentEl = actionButton.closest('.comment');
                    if (action === 'delete-post') handlers.deletePost(postEl.dataset.postId);
                    else if (action === 'delete-comment') (state.messagePollingIntervalId) clearInterval(state.messagePollingIntervalId); state.messagePollingIntervalId = handlers.deleteComment(commentEl.dataset.commentId);
                    else if (action === 'edit-post') handlers.enterEditMode(postEl.dataset.postId);
                    else if (action === 'delete-message') handlers.deleteMessage(actionButton.dataset.messageId);
                    else if (action === 'block null; state.currentConversation.id = null; }
            });
            document.body.addEventListener('submit-user') handlers.blockUser(actionButton.dataset.userId);
                    else if (action === 'unblock-user') handlers.unblockUser(actionButton.dataset.userId, e);
                    else if (action === 'report-post') handlers.openReportModal(postEl.dataset.userId, postEl.dataset.postId);
                    else if (action === 'report-user') handlers.openReportModal(actionButton.', (e) => { 
                const commentForm = e.target.closest('.comment-form'); dataset.userId);
                    else if (action === 'ban-user') handlers.openBanModal(actionButton.dataset.userId);
                    else if (action === 'add-comment-image') handlers.promptCommentImage
                if (commentForm) { e.preventDefault(); const input = commentForm.querySelector('input'); const postId = e.target.closest('.post').dataset.postId; handlers.addComment(postId, input.value);(actionButton.dataset.postId);
                    else if (action === 'remove-comment-image') handlers.removeCommentImage(actionButton.dataset.postId);
                    else if (action === 'view-post') handlers input.value = ''; delete state.pendingCommentDrafts[postId]; } 
                const messageForm = e.showPostDetail(actionButton.dataset.postId);
                    return;
                }
                if (target.closest('[data-nav="feed"]')) { e.preventDefault(); return core.navigateTo('feed'); }
                const hashtagLink = target.closest('.hashtag-link'); if (hashtagLink) { e.preventDefault(); handlers.showHashtagFeed(hashtagLink.dataset.hashtag); return; }
                const profileLink = target.closest('.post-header, .comment-header-main, .search-result-user, #conversation-.target.closest('#message-input-form'); 
                if (messageForm) { e.preventDefault(); handlers.sendMessage(); } 
            });
            document.getElementById('auth-view').addEventListener('keydown', (e) => { if (e.key !== 'Enter') return; const activeForm = !document.getElementById('login-form').classList.contains('hidden') ? document.getElementById('login-form') : document.getElementById('register-form'); e.preventDefault(); const inputs = [...activeForm.querySelectorAll('input')]; const currentInputIndexheader .profile-link, #settings-profile-link');
                if (profileLink && !target.closest('.post-options')) {
                    const userElement = profileLink.closest('[data-user-id]');
 = inputs.findIndex(input => input === document.activeElement); if (currentInputIndex > -1 && currentInputIndex < inputs.length - 1) inputs[currentInputIndex + 1].focus(); else activeForm.querySelector('button.primary').click(); });

            // SWIPE BACK GESTURE
            let touchStartX = 0;
            let touchStartY = 0;
            document.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                touchStartY = e.                    if (userElement && userElement.dataset.userId) {
                        if (state.currentView === 'search') { document.getElementById('search-input').value = ''; state.search = { query: '', results:changedTouches[0].screenY;
            }, {passive: true});

            document.addEventListener('touchend', (e) => {
                const touchEndX = e.changedTouches[0].screenX;
                const touchEndY = e.changedTouches[0].screenY;
                const deltaX = touchEndX - touch null, isLoading: false }; }
                        handlers.showProfile(userElement.dataset.userId); return;
                    }
                }
                if (target.closest('#edit-profile-btn')) return core.navigateTo('StartX;
                const deltaY = Math.abs(touchEndY - touchStartY);

                // Swipe right check: Start near left edge (< 50px), horizontal movement, logic distance (> 100px)
                if (touchStartX < 50 && deltaX > 100 && deltaY < 50) {
                    consteditProfile');
                if (target.closest('#follow-btn')) return handlers.toggleFollow(state.profile backBtn = document.querySelector('.view.active .back-btn');
                    const msgBackBtn = document.getElementById('back-to-convos-btn');
                    
                    // If in post detail, profile, or custom views with back button
                    if (backBtn && backBtn.offsetParent !== null) { // offsetParent null means hidden
                        backBtn.click();
                    } 
                    // If in message conversation view on mobileUser.userId);
                const likeBtn = target.closest('.like-btn'); if (likeBtn) return handlers.toggleLike(target.closest('.post').dataset.postId);
                if (target.closest('#message
                    else if (state.currentView === 'messages' && msgBackBtn && getComputedStyle(msgBackBtn).display !== 'none') {
                        msgBackBtn.click();
                    }
                }
            }, {passive: true});
        },
        async initializeApp() { 
            const savedUser = JSON.parse(localStorage.getItem('currentUser')); 
            if (!savedUser) { return core.navigateTo('auth-user-btn')) return handlers.startConversationFromProfile(state.profileUser.userId);
                const conversationItem = target.closest('.conversation-item'); if (conversationItem) { const otherUserId = conversationItem.dataset'); } 
            state.currentUser = savedUser; 
            state.deletedNotificationIds = new Set(JSON.parse(localStorage.getItem('notificationBlacklist') || '[]'));
            state.deletedPostIds =.userId; if (otherUserId && otherUserId !== state.currentConversation.id) handlers.loadConversation(otherUserId); return; }
                const backToConvosBtn = target.closest('#back-to-convos new Set(JSON.parse(localStorage.getItem('deletedPostIds') || '[]'));
            state.deletedCommentIds = new Set(JSON.parse(localStorage.getItem('deletedCommentIds') || '[]'));
            -btn'); if (backToConvosBtn) { document.querySelector('.messages-container').classList.remove('state.localBlocklist = new Set(JSON.parse(localStorage.getItem('localBlocklist') || '[]'));
            const navPfp = document.getElementById('nav-pfp');
            if (navPfpshow-chat-view'); if (state.messagePollingIntervalId) clearInterval(state.messagePollingIntervalId); state.messagePollingIntervalId = null; state.currentConversation.id = null; }
            });
             && state.currentUser.profilePictureUrl) navPfp.src = sanitizeHTML(state.currentUser.profilePictureUrl);
            
            // Check if user is banned on page load
            if (state.currentUser.bandocument.body.addEventListener('submit', (e) => { 
                const commentForm = e.target.closest('.comment-form'); 
                if (commentForm) { e.preventDefault(); const input = commentFormDetails) {
                ui.renderBanPage(state.currentUser.banDetails);
                return core.navigateTo('suspended');
            }
            
            core.navigateTo('feed'); 
            ui.showFeedSkeleton.querySelector('input'); const postId = e.target.closest('.post').dataset.postId; handlers.addComment(postId, input.value); input.value = ''; delete state.pendingCommentDrafts[postId]; } (document.getElementById('foryou-feed')); 
            try { await core.refreshFeed(false);
                const messageForm = e.target.closest('#message-input-form'); 
                if (message } catch (error) { alert(`Session error: ${error.message}. Please log in again.`); core.logoutForm) { e.preventDefault(); handlers.sendMessage(); } 
            });
            document.getElementById('auth-view').addEventListener('keydown', (e) => { if (e.key !== 'Enter') return; const activeForm = !document.getElementById('login-form').classList.contains('hidden') ? document.getElementById('login-form') : document.getElementById('register-form'); e.preventDefault(); const inputs = [...activeForm.querySelectorAll('(); } 
        },
        main() { 
            // Manual scroll restoration to force top on reload
            if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }
            
            core.input')]; const currentInputIndex = inputs.findIndex(input => input === document.activeElement); if (currentInputIndex > -1 && currentInputIndex < inputs.length - 1) inputs[currentInputIndex + setupEventListeners(); 
            const savedTheme = localStorage.getItem('theme') || 'dark'; 
            document.documentElement.setAttribute('data-theme', savedTheme); 
            document.getElementById('theme-switch').checked1].focus(); else activeForm.querySelector('button.primary').click(); });

            // SWIPE BACK GESTURE
            let touchStartX = 0;
            let touchStartY = 0;
            document. = savedTheme === 'dark'; 
            if (localStorage.getItem('currentUser')) { core.initializeApp(); } else { core.navigateTo('auth'); } 
        }
    };

    const formatTimestamp = (post) => {
        const timestampStr = post.timestamp;
        if (!timestampStr) return '';
        addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                touchStartY = e.changedTouches[0].screenY;
            }, {passive: true});

if (typeof timestampStr === 'string' && timestampStr.trim() === '') return '';
        
        const date = new Date(timestampStr);
        if (isNaN(date.getTime())) return '';

        const now            document.addEventListener('touchend', (e) => {
                const touchEndX = e.changedTouches[0].screenX;
                const touchEndY = e.changedTouches[0].screenY;
                const deltaX = touchEndX - touchStartX;
                const deltaY = Math.abs(touchEndY - touchStartY = new Date();
        const secondsAgo = Math.round((now - date) / 1000);
        if (secondsAgo < 60) return 'just now';
        const minutesAgo = Math);

                if (touchStartX < 50 && deltaX > 100 && deltaY < 50) {
                    const backBtn = document.querySelector('.view.active .back-btn');
                    .round(secondsAgo / 60);
        if (minutesAgo < 60) return `${minutesAgo}m ago`;
        const hoursAgo = Math.round(minutesAgo / 60);
        const msgBackBtn = document.getElementById('back-to-convos-btn');
                    
                    if (if (hoursAgo < 24) return `${hoursAgo}h ago`;
        const daysAgo = Math.round(hoursAgo / 24);
        if (daysAgo <= 14) return `${daysbackBtn && backBtn.offsetParent !== null) { 
                        backBtn.click();
                    } Ago}d ago`;
        return date.toLocaleDateString('en-us', { month: 'short', day: 'numeric' });
    };
    
    const sanitizeHTML = (str) => { if (!
                    else if (state.currentView === 'messages' && msgBackBtn && getComputedStyle(msgBackstr) return ''; const temp = document.createElement('div'); temp.textContent = str; return temp.innerHTML; };
    
    core.main();
});
